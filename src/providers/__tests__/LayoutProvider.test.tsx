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
      screen.getAllByLabelText('Ícone do GitHub arredondado e sem bordas')
    ).toHaveLength(2)
    expect(
      screen.getAllByLabelText('Link para o repositório do projeto')[0]
    ).toHaveAttribute('href', 'https://github.com/MatheusChignolli/web-dev-tools')
  })
})
