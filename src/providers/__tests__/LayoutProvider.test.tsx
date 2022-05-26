import { screen } from '@testing-library/react'
import { render } from '~tests'
import { LayoutProvider } from '..'

describe('LayoutProvider', () => {
  it('should render children, header and footer', () => {
    render(
      <LayoutProvider>
        <h1>Children</h1>
      </LayoutProvider>
    )

    expect(screen.getByText('Children')).toBeInTheDocument()
    expect(screen.getByText('To devs')).toBeInTheDocument()
    expect(
      screen.getByLabelText('Ícone do GitHub arredondado e sem bordas')
    ).toBeInTheDocument()
    expect(
      screen.getByLabelText('Link para o repositório do projeto')
    ).toHaveAttribute('href', 'https://github.com/MatheusChignolli/web-dev-tools')
  })
})
