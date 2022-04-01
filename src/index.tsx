import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import '~commons/styles/global.css'
import '~i18n'
import App from './App'
import reportWebVitals from './report-web-vitals'

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
