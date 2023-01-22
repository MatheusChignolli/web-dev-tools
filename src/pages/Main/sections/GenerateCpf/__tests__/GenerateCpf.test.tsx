import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { render } from '~tests'
import GenerateCpf from '..'

const mockWriteText = jest.fn()

Object.assign(navigator, {
  clipboard: {
    writeText: mockWriteText,
  },
})

describe('GenerateCpf', () => {
  beforeEach(() => {
    render(<GenerateCpf />)
  })

  afterEach(() => {
    mockWriteText.mockClear()
  })

  it('should show no data text if not generate CPF', () => {
    expect(screen.getByText('Sem dado')).toBeInTheDocument()
  })

  it('should generate CPF without mask and copy it', async () => {
    const generateButton = screen.getByRole('button', {
      name: 'Botão com um ícone que possui como ação gerar o CPF',
    })

    await waitFor(() => userEvent.click(generateButton))

    expect(
      screen.getByLabelText(
        /bloco com o conteúdo .{11} para ser enviado para a área de transferência de arquivos/i
      )
    ).toBeInTheDocument()
    expect(mockWriteText).toHaveBeenCalledTimes(1)
  })

  it('should generate CPF with mask and copy it', async () => {
    const maskCheckbox = screen.getByRole('checkbox')

    await waitFor(() => userEvent.click(maskCheckbox))

    const generateButton = screen.getByRole('button', {
      name: 'Botão com um ícone que possui como ação gerar o CPF',
    })

    await waitFor(() => userEvent.click(generateButton))

    expect(
      screen.getByLabelText(
        /bloco com o conteúdo .{14} para ser enviado para a área de transferência de arquivos/i
      )
    ).toBeInTheDocument()
    expect(mockWriteText).toHaveBeenCalledTimes(1)
  })

  it('should generate CPF when press Ctrl + g', async () => {
    await waitFor(() => userEvent.keyboard('{Control>}g{/Control}'))

    expect(
      screen.getByLabelText(
        /bloco com o conteúdo .{11} para ser enviado para a área de transferência de arquivos/i
      )
    ).toBeInTheDocument()
    expect(mockWriteText).toHaveBeenCalledTimes(1)
  })
})
