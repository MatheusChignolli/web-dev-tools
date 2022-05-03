import { screen } from '@testing-library/react'
import { render } from '~tests'
import Keycap from '..'

describe('Keycap', () => {
  it('should render keycap content', () => {
    render(<Keycap text="Keycap" />)
    expect(screen.getByText('Keycap')).toBeInTheDocument()
    expect(
      screen.getByLabelText('Elemento representando a tecla Keycap do teclado')
    ).toBeInTheDocument()
  })
})
