import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import '~commons/styles/global.css'
import '~i18n'
import 'react-toastify/dist/ReactToastify.css'
import reportWebVitals from './report-web-vitals'
import App from './App'

// TODO:
// - Add aria-labels to many places
// - Add hamburguer menu to put the About page
// - Create about page
// - Improve theme switch
// - Add historic to methods
// - add page for cpf, cnpj etc... regex

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.querySelector('#root')
)

reportWebVitals()
