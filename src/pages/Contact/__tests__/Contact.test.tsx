import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { render } from '~tests'
import Changelog from '../'

describe('Contact', () => {
  it('should create a link to mail message to app`s author', async () => {
    const { container } = render(<Changelog />)

    await userEvent.type(
      screen.getByRole('textbox', { name: 'E-mail' }),
      'example@example.com'
    )
    await userEvent.type(screen.getByRole('textbox', { name: 'Assunto' }), 'Subject')
    await userEvent.type(
      screen.getByRole('textbox', { name: 'Mensagem' }),
      'Message'
    )

    await userEvent.click(
      screen.getByRole('button', {
        name: 'Botão para submeter formulário de contato',
      })
    )

    expect(container).toMatchSnapshot()
  })
})
