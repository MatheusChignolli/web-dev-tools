import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { render } from '~tests'
import GenerateDocument from '..'
import { DocumentsConstants } from '~constants'

const mockWriteText = jest.fn()

Object.assign(navigator, {
  clipboard: {
    writeText: mockWriteText,
  },
})

const documentsLength = {
  cpf: {
    short: 11,
    long: 14,
  },
  cnpj: {
    short: 14,
    long: 18,
  },
  rg: {
    short: 9,
    long: 12,
  },
}

describe.each(DocumentsConstants.documentsConfig)(
  'GenerateDocument for %s',
  ({ document, keys, ...rest }) => {
    const upperCaseDocument = document.toUpperCase()
    const keyboardKeyDocument = keys[0]
    const documentLength = documentsLength[document]
    const shortRegex = new RegExp(
      `bloco com o conteúdo .{${documentLength.short}} para ser enviado para a área de transferência de arquivos`,
      'i'
    )
    const longRegex = new RegExp(
      `bloco com o conteúdo .{${documentLength.long}} para ser enviado para a área de transferência de arquivos`,
      'i'
    )

    beforeEach(() => {
      render(<GenerateDocument document={document} keys={keys} {...rest} />)
    })

    afterEach(() => {
      mockWriteText.mockClear()
    })

    it(`should show no data text if not generate ${upperCaseDocument}`, () => {
      expect(screen.getByText('-')).toBeInTheDocument()
    })

    it(`should generate ${upperCaseDocument} without mask and copy it`, async () => {
      const generateButton = screen.getByRole('button', {
        name: `Botão com um ícone que possui como ação gerar o ${upperCaseDocument}`,
      })

      await waitFor(() => userEvent.click(generateButton))

      expect(screen.getByLabelText(shortRegex)).toBeInTheDocument()
      expect(mockWriteText).toHaveBeenCalledTimes(1)
    })

    it(`should generate ${upperCaseDocument} with mask and copy it`, async () => {
      const generateButton = screen.getByRole('button', {
        name: `Botão com um ícone que possui como ação gerar o ${upperCaseDocument} com máscara`,
      })

      await waitFor(() => userEvent.click(generateButton))

      expect(screen.getByLabelText(longRegex)).toBeInTheDocument()
      expect(mockWriteText).toHaveBeenCalledTimes(1)
    })

    it(`should generate ${upperCaseDocument} when press Ctrl + ${keyboardKeyDocument}`, async () => {
      await waitFor(() =>
        userEvent.keyboard(`{Control>}${keyboardKeyDocument}{/Control}`)
      )

      expect(screen.getByLabelText(shortRegex)).toBeInTheDocument()
      expect(mockWriteText).toHaveBeenCalledTimes(1)
    })

    it(`should generate ${upperCaseDocument} with mask when press Shift + Ctrl + ${keyboardKeyDocument}`, async () => {
      await waitFor(() =>
        userEvent.keyboard(
          `{Shift>}{Control>}${keyboardKeyDocument}{/Control}{/Shift}`
        )
      )

      expect(screen.getByLabelText(longRegex)).toBeInTheDocument()
      expect(mockWriteText).toHaveBeenCalledTimes(1)
    })
  }
)
