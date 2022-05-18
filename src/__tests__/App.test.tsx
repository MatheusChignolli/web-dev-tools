import { screen } from '@testing-library/react'
import { render } from '~tests'
import App from '../App'

it('should render app', () => {
  render(<App />)

  expect(screen.getByText('To devs')).toBeInTheDocument()
})
