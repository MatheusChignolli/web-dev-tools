import { BrowserRouter } from 'react-router-dom'
import {
  TranslateProvider,
  StateProvider,
  ThemeProvider,
  LayoutProvider,
  FetchProvider,
} from '~providers'
import Router from './Router'

const App = () => (
  <FetchProvider>
    <BrowserRouter>
      <StateProvider>
        <ThemeProvider>
          <TranslateProvider>
            <LayoutProvider>
              <Router />
            </LayoutProvider>
          </TranslateProvider>
        </ThemeProvider>
      </StateProvider>
    </BrowserRouter>
  </FetchProvider>
)

export default App
