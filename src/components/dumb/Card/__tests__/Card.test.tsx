import { screen } from '@testing-library/react'
import { render } from '~tests'
import Card from '..'

describe('Card', () => {
  it('should render prop title and children', () => {
    render(<Card title="Title">Content</Card>)

    expect(screen.getByText('Title')).toBeInTheDocument()
    expect(screen.getByText('asdasdasdd')).toBeInTheDocument()
  })

  it('should not render prop title and not pass it', () => {
    render(<Card>Content</Card>)

    expect(screen.queryByLabelText('Título do card')).not.toBeInTheDocument()
  })

  it('should render keycaps for shortcuts', () => {
    render(<Card keys={['Ctrl', 'Q']}>Content</Card>)

    expect(screen.getByText('Ctrl')).toBeInTheDocument()
    expect(screen.getByText('Q')).toBeInTheDocument()
  })
})
