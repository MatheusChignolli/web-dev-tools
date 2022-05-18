import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import '~commons/styles/global.css'
import '~i18n'
import 'react-toastify/dist/ReactToastify.css'
import reportWebVitals from './report-web-vitals'
import App from './App'
// TODO:
// - Add aria-labels to many places
// - Put toastfy for user feedback
// - Add keyboard commands to generate CPF
// - Add hamburguer menu to put the About page
// - Create about page
// - Responsive layout
// - Create a name for the app
// - Improve theme switch
// - Add historic to methods
// - add page for cpf, cnpj etc... regex

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.querySelector('#root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
