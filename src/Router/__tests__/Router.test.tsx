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
        <Link to="/">Link to home</Link>
        <Link to="/404">Link to 404</Link>
        <Link to="/changelog">Link to changelog</Link>
      </>
    )
  })

  afterEach(async () => {
    const linkButton = screen.getByText('Link to home')

    await waitFor(() => userEvent.click(linkButton))

    await waitFor(() => {
      screen.getByText('Gerar CPF')
    })
  })

  it('should render suspense', () => {
    expect(
      screen.getByRole('progressbar', {
        name: 'Círculo girando no sentido horário de forma não ordenada representando o carregamento de alguma coisa',
      })
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

  it('should render "/changelog" route', async () => {
    await waitFor(() => {
      expect(screen.getByText('Gerar CPF')).toBeInTheDocument()
    })

    const linkButton = screen.getByText('Link to changelog')

    await waitFor(() => userEvent.click(linkButton))

    await waitFor(() => {
      expect(
        screen.getByLabelText('Bloco de linguagem de marcação Markdown')
      ).toBeInTheDocument()
    })
  })
})
