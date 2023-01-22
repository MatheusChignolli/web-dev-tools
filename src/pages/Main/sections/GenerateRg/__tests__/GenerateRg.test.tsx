import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { render } from '~tests'
import GenerateRg from '..'

const mockWriteText = jest.fn()

Object.assign(navigator, {
  clipboard: {
    writeText: mockWriteText,
  },
})

describe('GenerateRg', () => {
  beforeEach(() => {
    render(<GenerateRg />)
  })

  afterEach(() => {
    mockWriteText.mockClear()
  })

  it('should show no data text if not generate RG', () => {
    expect(screen.getByText('Sem dado')).toBeInTheDocument()
  })

  it('should generate RG without mask and copy it', async () => {
    const generateButton = screen.getByRole('button', {
      name: 'Botão com um ícone que possui como ação gerar o RG',
    })

    await waitFor(() => userEvent.click(generateButton))

    expect(
      screen.getByLabelText(
        /bloco com o conteúdo .{9} para ser enviado para a área de transferência de arquivos/i
      )
    ).toBeInTheDocument()
    expect(mockWriteText).toHaveBeenCalledTimes(1)
  })

  it('should generate RG with mask and copy it', async () => {
    const maskCheckbox = screen.getByRole('checkbox')

    await waitFor(() => userEvent.click(maskCheckbox))

    const generateButton = screen.getByRole('button', {
      name: 'Botão com um ícone que possui como ação gerar o RG',
    })

    await waitFor(() => userEvent.click(generateButton))

    expect(
      screen.getByLabelText(
        /bloco com o conteúdo .{12} para ser enviado para a área de transferência de arquivos/i
      )
    ).toBeInTheDocument()
    expect(mockWriteText).toHaveBeenCalledTimes(1)
  })

  it('should generate RG when press Ctrl + e', async () => {
    await waitFor(() => userEvent.keyboard('{Control>}e{/Control}'))

    expect(
      screen.getByLabelText(
        /bloco com o conteúdo .{9} para ser enviado para a área de transferência de arquivos/i
      )
    ).toBeInTheDocument()
    expect(mockWriteText).toHaveBeenCalledTimes(1)
  })
})
