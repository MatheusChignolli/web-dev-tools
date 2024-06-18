import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { render } from '~tests'
import Clipboard from '..'
import { act } from 'react'

jest.useFakeTimers()

const clipboardMock = jest.fn()

Object.assign(navigator, {
  clipboard: {
    writeText: clipboardMock,
  },
})

describe('Clipboard', () => {
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

      await waitFor(() => userEvent.click(copyButton))

      expect(clipboardMock).toHaveBeenCalledWith(content)
      expect(screen.getByText('Copiado')).toBeInTheDocument()

      act(() => {
        jest.advanceTimersByTime(6000)
      })

      expect(screen.queryByText('Copiado')).not.toBeVisible()
    })

    it('should render and call copy to clipboard method and not show success message on render', async () => {
      expect(screen.getByText(content)).toBeInTheDocument()

      expect(clipboardMock).toHaveBeenCalled()
      expect(clipboardMock).toHaveBeenCalledWith(content)
    })
  })
})
