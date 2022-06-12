import { screen } from '@testing-library/react'
import { render } from '~tests'
import { FetchProvider } from '..'

describe('FetchProvider', () => {
  it('should render children', () => {
    render(
      <FetchProvider>
        <h1>FetchProvider</h1>
      </FetchProvider>
    )

    expect(screen.getByText('FetchProvider')).toBeInTheDocument()
  })
})
