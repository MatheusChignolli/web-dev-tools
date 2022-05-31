import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { format } from 'date-fns'
import { render } from '~tests'
import Footer from '..'

describe('Footer', () => {
  beforeEach(() => {
    render(<Footer />)
  })

  it('should render project`s link', () => {
    expect(
      screen.getByLabelText('Ícone do GitHub arredondado e sem bordas')
    ).toBeInTheDocument()
    expect(
      screen.getByLabelText('Link para o repositório do projeto')
    ).toHaveAttribute('href', 'https://github.com/MatheusChignolli/web-dev-tools')
  })

  it('should render changelog`s link and go to changelog`s page', async () => {
    const changelogPageLink = screen.getByLabelText(
      'Link para a página de changelog da aplicação'
    )

    expect(changelogPageLink).toHaveAttribute('href', '/changelog')

    await waitFor(() => userEvent.click(changelogPageLink))

    await waitFor(() => {
      expect(window.location.pathname).toBe('/changelog')
    })
  })

  it('should render the current year on copyright text', () => {
    expect(
      screen.getByLabelText(
        'Ícone de apenas a borda de um círculo com a letra C no centro'
      )
    ).toBeInTheDocument()
    expect(
      screen.getByLabelText('Texto com o ano vigente e um ícone de Copyright')
    ).toBeInTheDocument()
    expect(screen.getByText(format(new Date(), 'yyyy'))).toBeInTheDocument()
  })
})
