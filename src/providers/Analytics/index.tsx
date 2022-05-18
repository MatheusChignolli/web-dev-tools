import { useEffect } from 'react'
import ReactGA from 'react-ga'
import { AnalyticsProviderProps } from './interfaces'

const AnalyticsProvider = ({ children }: AnalyticsProviderProps) => {
  useEffect(() => {
    ReactGA.initialize('G-20K1Z0MMNJ')
  }, [])

  return <>{children}</>
}

export default AnalyticsProvider
