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
    const themeSwitch = screen.getByRole('button', { name: '' })

    await waitFor(() => userEvent.click(themeSwitch))

    expect(screen.getByLabelText('Cabeçalho do site')).toHaveStyle(
      'color: rgb(255, 255, 255)'
    )

    await waitFor(() => userEvent.click(themeSwitch))

    expect(screen.getByLabelText('Cabeçalho do site')).toHaveStyle(
      'color: rgb(0, 0, 0)'
    )
  })

  it('should switch app`s language', async () => {
    expect(screen.getByLabelText('Cabeçalho do site')).toBeInTheDocument()

    const languageSelect = screen.getAllByRole('button')[1]

    fireEvent.mouseDown(languageSelect)

    const languageListbox = within(screen.getByRole('listbox'))

    const enButton = languageListbox.getByLabelText('Inglês americano')

    await waitFor(() => userEvent.click(enButton))

    expect(screen.getByLabelText('Site`s header')).toBeInTheDocument()
  })
})
