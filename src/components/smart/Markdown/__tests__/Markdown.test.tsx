import { screen } from '@testing-library/react'
import { render } from '~tests'
import Markdown from '..'

describe('Markdown', () => {
  it('should render component Markdown', async () => {
    render(<Markdown body="# Title ## Block of markdown" />)

    expect(
      screen.getByLabelText('Bloco de linguagem de marcação Markdown')
    ).toBeInTheDocument()
    expect(screen.getByText('# Title ## Block of markdown')).toBeInTheDocument()
  })
})
