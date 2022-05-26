import { BrowserRouter } from 'react-router-dom'
import {
  TranslateProvider,
  StateProvider,
  ThemeProvider,
  ToastProvider,
  LayoutProvider,
} from '~providers'
import Router from './Router'

const App = () => (
  <BrowserRouter>
    <StateProvider>
      <ThemeProvider>
        <TranslateProvider>
          <LayoutProvider>
            <ToastProvider>
              <Router />
            </ToastProvider>
          </LayoutProvider>
        </TranslateProvider>
      </ThemeProvider>
    </StateProvider>
  </BrowserRouter>
)

export default App
