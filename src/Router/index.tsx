import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import routes from './routes'
import { Loader } from '~components'

const Router = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {routes.map(({ component, path }, index) => (
          <Route
            path={path}
            key={`route-${index}`}
            element={component}
            caseSensitive
          />
        ))}
      </Routes>
    </Suspense>
  )
}

export default Router
