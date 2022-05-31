import { lazy } from 'react'
import { HttpConstants } from '~constants'

const Main = lazy(() => import('../pages/Main'))
const Exception = lazy(() => import('../pages/Exception'))
const Changelog = lazy(() => import('../pages/Changelog'))

const httpRoutes = Object.values(HttpConstants.codes).map((code) => ({
  path: `/${code}`,
  component: <Exception code={code} />,
}))

const routes = [
  { path: '/', component: <Main /> },
  { path: '/changelog', component: <Changelog /> },
  ...httpRoutes,
] as const

export default routes
