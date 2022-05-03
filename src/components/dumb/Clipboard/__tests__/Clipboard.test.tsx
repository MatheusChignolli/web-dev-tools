import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils'
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

    afterEach(() => {
      clipboardMock.mockReset()
    })

    it('should call copy to clipboard method and show success message when click on run button', async () => {
      const copyButton = screen.getByRole('button', {
        name: 'Botão para efetuar a ação de copiar algum texto na área de transferência de arquivos',
      })

      await act(() => userEvent.click(copyButton))

      expect(clipboardMock).toBeCalledWith(content)
      expect(
        await screen.findAllByText(`${content} copiado com sucesso`)
      ).toHaveLength(2)
    })

    it('should render and call copy to clipboard method and show success message on render', async () => {
      expect(screen.getByText(content)).toBeInTheDocument()

      expect(clipboardMock).toBeCalledTimes(1)
      expect(clipboardMock).toBeCalledWith(content)
      expect(
        await screen.findByText(`${content} copiado com sucesso`)
      ).toBeInTheDocument()
    })
  })
})
