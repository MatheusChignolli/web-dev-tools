import { useEffect } from 'react'
import ReactGA from 'react-ga'
import { AnalyticsProviderProps } from './interfaces'

const AnalyticsProvider = ({ children }: AnalyticsProviderProps) => {
  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_TRACKING_ID as string)
  }, [])

  return <>{children}</>
}

export default AnalyticsProvider
