import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Link } from 'react-router-dom'
import { render } from '~tests'
import Router from '..'
import { act } from 'react'

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => [],
  })
) as any

describe('Router', () => {
  beforeEach(async () => {
    await act(async () => {
      render(
        <>
          <Router />
          <Link to="/">Link to home</Link>
          <Link to="/404">Link to 404</Link>
          <Link to="/changelog">Link to changelog</Link>
          <Link to="/terms-of-use">Link to terms of use</Link>
          <Link to="/privacy-policy">Link to privacy policy</Link>
          <Link to="/about">Link to about</Link>
          <Link to="/contact">Link to contact</Link>
        </>
      )
    })
  })

  afterEach(async () => {
    const linkButton = screen.getByText('Link to home')

    await userEvent.click(linkButton)

    await waitFor(() => {
      screen.getByText('Gerar CPF')
    })
  })

  it('should render "/" route', async () => {
    await waitFor(() => {
      expect(screen.getByText('Gerar CPF')).toBeInTheDocument()
    })

    expect(screen.getByText('Gerar CNPJ')).toBeInTheDocument()
    expect(screen.getByText('Gerar RG')).toBeInTheDocument()
  })

  it('should render "/404" route', async () => {
    await waitFor(() => {
      expect(screen.getByText('Gerar CPF')).toBeInTheDocument()
    })

    const linkButton = screen.getByText('Link to 404')

    await userEvent.click(linkButton)

    await waitFor(() => {
      expect(screen.getByText('404')).toBeInTheDocument()
    })
  })

  it('should render "/changelog" route', async () => {
    await waitFor(() => {
      expect(screen.getByText('Gerar CPF')).toBeInTheDocument()
    })

    const linkButton = screen.getByText('Link to changelog')

    await userEvent.click(linkButton)

    await waitFor(() => {
      expect(screen.getByText('Sem conteúdo')).toBeInTheDocument()
    })
  })

  it('should render "/terms-of-use" route', async () => {
    await waitFor(() => {
      expect(screen.getByText('Gerar CPF')).toBeInTheDocument()
    })

    const linkButton = screen.getByText('Link to terms of use')

    await userEvent.click(linkButton)

    await waitFor(() => {
      expect(screen.getByText('Política de Termos e Uso')).toBeInTheDocument()
    })
  })

  it('should render "/privacy-policy" route', async () => {
    await waitFor(() => {
      expect(screen.getByText('Gerar CPF')).toBeInTheDocument()
    })

    const linkButton = screen.getByText('Link to privacy policy')

    await userEvent.click(linkButton)

    await waitFor(() => {
      expect(screen.getByText('Política de Privacidade')).toBeInTheDocument()
    })
  })

  it('should render "/about" route', async () => {
    await waitFor(() => {
      expect(screen.getByText('Gerar CPF')).toBeInTheDocument()
    })

    const linkButton = screen.getByText('Link to about')

    await userEvent.click(linkButton)

    await waitFor(() => {
      expect(screen.getByText('Sobre nós')).toBeInTheDocument()
    })
  })

  it('should render "/contact" route', async () => {
    await waitFor(() => {
      expect(screen.getByText('Gerar CPF')).toBeInTheDocument()
    })

    const linkButton = screen.getByText('Link to contact')

    await userEvent.click(linkButton)

    await waitFor(() => {
      expect(screen.getByText('Contato')).toBeInTheDocument()
    })
  })
})
