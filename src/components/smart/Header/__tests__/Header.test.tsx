import { fireEvent, screen } from '@testing-library/react'
import { render } from '~tests'
import Header from '..'

describe('Header', () => {
  beforeEach(() => {
    render(<Header />)
  })

  it('should render title', () => {
    expect(screen.getByText('Dev helper')).toBeInTheDocument()
  })

  it('should switch app theme', () => {
    const themeSwitch = screen.getByRole('checkbox')

    fireEvent.click(themeSwitch)

    expect(screen.getByLabelText('Cabeçalho do site')).toHaveStyle(
      'color: rgb(44, 120, 115)'
    )

    fireEvent.click(themeSwitch)

    expect(screen.getByLabelText('Cabeçalho do site')).toHaveStyle(
      'color: rgb(241, 241, 242)'
    )
  })
})
