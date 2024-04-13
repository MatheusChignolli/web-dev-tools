import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils'
import { Link } from 'react-router-dom'
import { render } from '~tests'
import Router from '..'

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
})
