import { render } from '@testing-library/react'
import { SkipLinkStyled } from '../styles'

describe('Layout styles', () => {
  it('should render skip link', () => {
    const { getByText } = render(
      <SkipLinkStyled href="#main-content">Skip to main content</SkipLinkStyled>,
    )

    expect(getByText('Skip to main content')).toHaveAttribute(
      'href',
      '#main-content',
    )
  })
})
