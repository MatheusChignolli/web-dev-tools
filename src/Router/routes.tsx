import { lazy } from 'react'
import { HttpConstants } from '~constants'

const Main = lazy(() => import('../pages/Main'))
const Exception = lazy(() => import('../pages/Exception'))
const Changelog = lazy(() => import('../pages/Changelog'))
const TermsOfUse = lazy(() => import('../pages/TermsOfUse'))
const PrivacyPolicy = lazy(() => import('../pages/PrivacyPolicy'))
const About = lazy(() => import('../pages/About'))
const Contact = lazy(() => import('../pages/Contact'))

const httpRoutes = Object.values(HttpConstants.codes).map((code) => ({
  path: `/${code}`,
  component: <Exception code={code} />,
}))

const routes = [
  { path: '/', component: <Main /> },
  { path: '/changelog', component: <Changelog /> },
  { path: '/terms-of-use', component: <TermsOfUse /> },
  { path: '/privacy-policy', component: <PrivacyPolicy /> },
  { path: '/about', component: <About /> },
  { path: '/contact', component: <Contact /> },
  { path: '*', component: <Exception code={404} /> },
  ...httpRoutes,
] as const

export default routes
