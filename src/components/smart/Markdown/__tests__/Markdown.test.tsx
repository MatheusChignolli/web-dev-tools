import { screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { render } from '~tests'
import Markdown from '..'

describe('Markdown', () => {
  it('should render component Markdown', async () => {
    await act(async () => {
      render(
        <Markdown body="# Title \n ## Bloco de linguagem de marcação Markdown" />
      )
    })

    expect(
      screen.getByLabelText('Bloco de linguagem de marcação Markdown')
    ).toBeInTheDocument()
    expect(screen.getByText('Title')).toBeInTheDocument()
  })
})
