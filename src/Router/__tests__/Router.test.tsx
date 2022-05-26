import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Link } from 'react-router-dom'
import { render } from '~tests'
import Router from '..'

describe('Router', () => {
  beforeEach(() => {
    render(
      <>
        <Router />
        <Link to="/404">Link to 404</Link>
      </>
    )
  })

  it('should render suspense', () => {
    expect(
      screen.getByRole('heading', { name: /carregando\.\.\./i })
    ).toBeInTheDocument()
  })

  it('should render "/" route', async () => {
    await waitFor(() => {
      expect(screen.getByText('Gerar CPF')).toBeInTheDocument()
    })

    expect(screen.getByText('Gerar CNPJ')).toBeInTheDocument()
    expect(screen.getByText('Gerar RG')).toBeInTheDocument()
    expect(screen.getByText('Gerar RG')).toBeInTheDocument()
  })

  it('should render "/404" route', async () => {
    await waitFor(() => {
      expect(screen.getByText('Gerar CPF')).toBeInTheDocument()
    })

    const linkButton = screen.getByText('Link to 404')

    await waitFor(() => userEvent.click(linkButton))

    await waitFor(() => {
      expect(screen.getByText('404')).toBeInTheDocument()
    })
  })
})
