import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '~commons/styles/global.css'
import '~i18n'
import reportWebVitals from './report-web-vitals'
import App from './App'

// TODO:
// - Add aria-labels to many places
// - Add historic to methods
// - Histórico de documentos gerados
// - GIF sobre como utilizar a geração em lote
// - Otimizar o tamanho do CSS e JS para deixar a aplicação performática
// - Adicionar texto para que o ADSense aprove o site
// - Otimizar importações do MUI para usar menos código possível

createRoot(document.querySelector('#root') as Element).render(
  <StrictMode>
    <App />
  </StrictMode>
)

reportWebVitals()
