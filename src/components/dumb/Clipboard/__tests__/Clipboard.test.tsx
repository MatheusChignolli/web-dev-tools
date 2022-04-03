import { screen, fireEvent } from '@testing-library/react'
import { render } from '~tests'
import Clipboard from '..'

const clipboardMock = jest.fn()

Object.assign(navigator, {
  clipboard: {
    writeText: clipboardMock,
  },
})

describe('Clipborad', () => {
  it('should render "Sem dado" message when content prop is not given', () => {
    render(<Clipboard />)
    expect(screen.getByText('Sem dado')).toBeInTheDocument()
  })

  describe('when pass content prop', () => {
    const content = 'Clipboard data'

    beforeEach(() => {
      render(<Clipboard content={content} />)
    })

    it('should render content given to content prop', () => {
      expect(screen.getByText(content)).toBeInTheDocument()
    })

    it('should call copy to clipboard method and show success message', async () => {
      const copyButton = screen.getByRole('button', {
        name: 'Botão para efetuar a ação de copiar algum texto na área de transferência de arquivos',
      })

      fireEvent.click(copyButton)

      expect(clipboardMock).toBeCalledTimes(1)
      expect(clipboardMock).toBeCalledWith(content)
      expect(
        await screen.findByText(`${content} copiado com sucesso`)
      ).toBeInTheDocument()
    })
  })
})
