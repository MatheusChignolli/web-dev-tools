import { Suspense } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import routes from './routes'
import { Loader } from './sections'

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
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </Suspense>
  )
}

export default Router
