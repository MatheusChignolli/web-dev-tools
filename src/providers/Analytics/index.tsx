import { useEffect } from 'react'
import ReactGA from 'react-ga'
import { AnalyticsProviderProps } from './interfaces'

const AnalyticsProvider = ({ children }: AnalyticsProviderProps) => {
  useEffect(() => {
    ReactGA.initialize('G-3XEEBEC5S4')
  }, [])

  return <>{children}</>
}

export default AnalyticsProvider
