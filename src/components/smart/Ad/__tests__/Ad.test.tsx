import { render } from '@testing-library/react'
import Ad from '..'

describe('Ad', () => {
  beforeEach(() => {
    jest.useFakeTimers()
    document.head.innerHTML = ''
  })

  afterEach(() => {
    jest.runOnlyPendingTimers()
    jest.useRealTimers()
    document.head.innerHTML = ''
  })

  it('should render ad slot markup', () => {
    render(<Ad />)

    const adSlot = document.querySelector('.adupeex')

    expect(adSlot).toBeInTheDocument()
    expect(adSlot).toHaveAttribute('data-ad-client', 'up-ba-332044')
    expect(adSlot).toHaveAttribute('data-ad-slot', '37633')
    expect(adSlot).toHaveAttribute('data-ad-display', 'horizontal')
    expect(document.querySelector('.square-add')).toBeInTheDocument()
  })

  it('should load upeex script after delay', () => {
    render(<Ad />)

    expect(
      document.querySelector('script[src="https://upeex.com.br/adsupeex.js"]'),
    ).not.toBeInTheDocument()

    jest.advanceTimersByTime(8000)

    expect(
      document.querySelector('script[src="https://upeex.com.br/adsupeex.js"]'),
    ).toBeInTheDocument()
  })

  it('should not duplicate upeex script when it already exists', () => {
    const existingScript = document.createElement('script')
    existingScript.src = 'https://upeex.com.br/adsupeex.js'
    document.head.appendChild(existingScript)

    render(<Ad />)
    jest.advanceTimersByTime(8000)

    expect(
      document.querySelectorAll('script[src="https://upeex.com.br/adsupeex.js"]'),
    ).toHaveLength(1)
  })

  it('should clear timeout on unmount', () => {
    const { unmount } = render(<Ad />)

    unmount()
    jest.advanceTimersByTime(8000)

    expect(
      document.querySelector('script[src="https://upeex.com.br/adsupeex.js"]'),
    ).not.toBeInTheDocument()
  })
})
