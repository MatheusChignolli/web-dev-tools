import { act, render, screen } from '@testing-library/react'
import LazyAds from '..'

type IntersectionObserverCallback = (
  entries: Array<{ isIntersecting: boolean }>,
) => void

let intersectionCallback: IntersectionObserverCallback | undefined
const observe = jest.fn()
const disconnect = jest.fn()

class IntersectionObserverMock {
  constructor(callback: IntersectionObserverCallback) {
    intersectionCallback = callback
  }

  observe = observe
  disconnect = disconnect
}

describe('LazyAds', () => {
  const originalIntersectionObserver = window.IntersectionObserver

  beforeEach(() => {
    jest.useFakeTimers()
    intersectionCallback = undefined
    observe.mockClear()
    disconnect.mockClear()
    window.IntersectionObserver =
      IntersectionObserverMock as unknown as typeof IntersectionObserver
  })

  afterEach(() => {
    jest.runOnlyPendingTimers()
    jest.useRealTimers()
    window.IntersectionObserver = originalIntersectionObserver
  })

  it('should not render children before reveal', () => {
    render(
      <LazyAds>
        <span>Ad content</span>
      </LazyAds>,
    )

    expect(screen.queryByText('Ad content')).not.toBeInTheDocument()
  })

  it('should render children after timeout', () => {
    render(
      <LazyAds>
        <span>Ad content</span>
      </LazyAds>,
    )

    act(() => {
      jest.advanceTimersByTime(8000)
    })

    expect(screen.getByText('Ad content')).toBeInTheDocument()
  })

  it('should render children when element intersects', () => {
    render(
      <LazyAds>
        <span>Ad content</span>
      </LazyAds>,
    )

    act(() => {
      intersectionCallback?.([{ isIntersecting: true }])
    })

    expect(screen.getByText('Ad content')).toBeInTheDocument()
  })

  it('should not render children when element is not intersecting', () => {
    render(
      <LazyAds>
        <span>Ad content</span>
      </LazyAds>,
    )

    act(() => {
      intersectionCallback?.([{ isIntersecting: false }])
    })

    expect(screen.queryByText('Ad content')).not.toBeInTheDocument()
  })

  it('should observe container and clean up on unmount', () => {
    const { unmount } = render(
      <LazyAds minHeight={120}>
        <span>Ad content</span>
      </LazyAds>,
    )

    expect(observe).toHaveBeenCalled()

    unmount()

    act(() => {
      jest.advanceTimersByTime(8000)
    })

    expect(disconnect).toHaveBeenCalled()
    expect(screen.queryByText('Ad content')).not.toBeInTheDocument()
  })
})
