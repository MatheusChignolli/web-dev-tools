import { render } from '~tests'
import App from '../App'

test('renders learn react link', () => {
  const { container } = render(<App />)
  expect(container.querySelector('#app')).toBeInTheDocument()
})
