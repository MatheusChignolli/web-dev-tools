import { screen, waitFor } from '@testing-library/react'
import { render } from '~tests'
import AnalyticsProvider from '..'

const analyticsInitializeMock = jest.fn()

jest.mock('react-ga', () => ({
  initialize: () => analyticsInitializeMock,
}))

describe('AnalyticsProvider', () => {
  beforeEach(() => {
    render(<AnalyticsProvider>Content</AnalyticsProvider>)
  })

  it('should render content', () => {
    expect(screen.getByText('Content')).toBeInTheDocument()
  })

  it('should call analyticsMock', () => {
    waitFor(() => {
      expect(analyticsInitializeMock).toBeCalledTimes(1)
    })
    waitFor(() => {
      expect(analyticsInitializeMock).toBeCalledWith(
        process.env.REACT_APP_TRACKING_ID
      )
    })
  })
})
