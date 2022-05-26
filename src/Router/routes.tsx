import { lazy } from 'react'
import { HttpConstants } from '~constants'

const Main = lazy(() => import('../pages/Main'))
const Exception = lazy(() => import('../pages/Exception'))

const routes = [
  { path: '/', component: <Main /> },
  ...Object.values(HttpConstants.codes).map((code) => ({
    path: `/${code}`,
    component: <Exception code={code} />,
  })),
] as const

export default routes
