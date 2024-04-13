import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '~commons/styles/global.css'
import '~i18n'
import 'react-toastify/dist/ReactToastify.css'
import reportWebVitals from './report-web-vitals'
import App from './App'

// TODO:
// - Add aria-labels to many places
// - Add historic to methods

createRoot(document.querySelector('#root') as Element).render(
  <StrictMode>
    <App />
  </StrictMode>
)

reportWebVitals()
