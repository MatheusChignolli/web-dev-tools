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
    expect(screen.getAllByText('To devs')[0]).toBeInTheDocument()
    expect(
      screen.getAllByLabelText('Ícone do GitHub arredondado e sem bordas')
    ).toHaveLength(2)
    expect(
      screen.getAllByLabelText('Ícone do LinkedIn arredondado e sem bordas')
    ).toHaveLength(2)
    expect(
      screen.getAllByLabelText('Link para o repositório da aplicação')[0]
    ).toHaveAttribute('href', 'https://github.com/MatheusChignolli/web-dev-tools')
    expect(
      screen.getAllByLabelText('Link para o LinkedIn do autor da aplicação')[0]
    ).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/matheus-chignolli-a0115b155/'
    )
  })
})
