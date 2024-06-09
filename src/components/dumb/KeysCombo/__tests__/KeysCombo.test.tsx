import { screen } from '@testing-library/react'
import { render } from '~tests'
import KeysCombo from '..'

describe('KeysCombo', () => {
  it('should render keys combo', () => {
    render(<KeysCombo keys={['Ctrl', 'Q']} />)

    expect(screen.getByText('Ctrl')).toBeInTheDocument()
    expect(screen.getByText('Q')).toBeInTheDocument()
  })

  it('should not render keys combo', () => {
    render(<KeysCombo keys={[]} />)

    expect(screen.queryByText('Ctrl')).not.toBeInTheDocument()
    expect(screen.queryByText('Q')).not.toBeInTheDocument()
  })

  it('should not render keys combo when keys is undefined', () => {
    // @ts-expect-error
    render(<KeysCombo keys={undefined} />)

    expect(screen.queryByText('Ctrl')).not.toBeInTheDocument()
    expect(screen.queryByText('Q')).not.toBeInTheDocument()
  })
})
