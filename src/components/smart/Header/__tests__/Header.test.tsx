import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { render } from '~tests'
import Header from '..'

describe('Header', () => {
  beforeEach(() => {
    render(<Header />)
  })

  it('should render title', () => {
    expect(screen.getByText('Dev helper')).toBeInTheDocument()
  })

  it('should switch app`s theme', async () => {
    const themeSwitch = screen.getByRole('checkbox')

    await waitFor(() => userEvent.click(themeSwitch))

    expect(screen.getByLabelText('Cabeçalho do site')).toHaveStyle(
      'color: rgb(44, 120, 115)'
    )

    await waitFor(() => userEvent.click(themeSwitch))

    expect(screen.getByLabelText('Cabeçalho do site')).toHaveStyle(
      'color: rgb(241, 241, 242)'
    )
  })
})
