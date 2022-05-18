import { fireEvent, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { render } from '~tests'
import Header from '..'

describe('Header', () => {
  beforeEach(() => {
    render(<Header />)
  })

  it('should render title', () => {
    expect(screen.getByText('To devs')).toBeInTheDocument()
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

  it('should switch app`s language', async () => {
    expect(screen.getByLabelText('Cabeçalho do site')).toBeInTheDocument()

    const languageSelect = screen.getByRole('button')

    fireEvent.mouseDown(languageSelect)

    const languageListbox = within(screen.getByRole('listbox'))

    const enButton = languageListbox.getByLabelText('Inglês americano')

    await waitFor(() => userEvent.click(enButton))

    expect(screen.getByLabelText('Site`s header')).toBeInTheDocument()
  })
})
