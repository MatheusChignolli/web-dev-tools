import { ReactNode } from 'react'
import { screen } from '@testing-library/react'
import { render } from '~tests'
import App from '../App'

jest.mock('~providers', () => {
  const originalModule = jest.requireActual('~providers')

  return {
    __esModule: true,
    ...originalModule,
    AnalyticsProvider: ({ children }: { children: ReactNode }) => children,
  }
})

it('should render app', () => {
  render(<App />)

  expect(screen.getByText('To devs')).toBeInTheDocument()
})
