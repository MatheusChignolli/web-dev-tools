import { Suspense } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import routes from './routes'

const Router = () => {
  return (
    <Suspense fallback={<h1>Carregando...</h1>}>
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
