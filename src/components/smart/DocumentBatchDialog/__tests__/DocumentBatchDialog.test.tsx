import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { render } from '~tests'
import DocumentBatchDialog from '..'
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
  'DocumentBatchDialog for %s',
  ({ document, generate }) => {
    const upperCaseDocument = document.toUpperCase()
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
      render(<DocumentBatchDialog document={document} generate={generate} />)
    })

    afterEach(() => {
      mockWriteText.mockClear()
    })

    it(`should open dialog, show no data text if not generate ${upperCaseDocument} and close dialog`, async () => {
      await userEvent.click(
        screen.getByRole('button', {
          name: `Botão para abrir diálogo para gerar ${document} em massa`,
        })
      )

      expect(screen.getByText('Sem dado')).toBeInTheDocument()

      await userEvent.click(
        screen.getByRole('button', {
          name: 'Botão para fechar diálogo',
        })
      )

      expect(screen.getByText('Sem dado')).not.toBeVisible()
    })

    it(`should generate ${upperCaseDocument} without mask and copy it`, async () => {
      await userEvent.click(
        screen.getByRole('button', {
          name: `Botão para abrir diálogo para gerar ${document} em massa`,
        })
      )

      await userEvent.type(
        screen.getByRole('spinbutton', { name: 'Quantidade' }),
        '1'
      )

      const generateButton = screen.getByRole('button', {
        name: `Botão parar gerar ${document} em massa`,
      })

      await waitFor(() => userEvent.click(generateButton))

      expect(screen.getByLabelText(shortRegex)).toBeInTheDocument()
      expect(mockWriteText).toHaveBeenCalledTimes(1)
    })

    it(`should generate ${upperCaseDocument} with mask and copy it`, async () => {
      await userEvent.click(
        screen.getByRole('button', {
          name: `Botão para abrir diálogo para gerar ${document} em massa`,
        })
      )

      await userEvent.type(
        screen.getByRole('spinbutton', { name: 'Quantidade' }),
        '1'
      )
      await userEvent.click(
        screen.getByRole('checkbox', {
          name: `Marcador relacionado a gerar ${document} em massa com máscara`,
        })
      )

      const generateButton = screen.getByRole('button', {
        name: `Botão parar gerar ${document} em massa`,
      })

      await waitFor(() => userEvent.click(generateButton))

      expect(screen.getByLabelText(longRegex)).toBeInTheDocument()
      expect(mockWriteText).toHaveBeenCalledTimes(1)
    })
  }
)
