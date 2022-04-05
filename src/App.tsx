import { Main } from '~pages'
import {
  TranslateProvider,
  StateProvider,
  ThemeProvider,
  ToastProvider,
} from '~providers'
import { AppStyled } from './styles'

const App = () => (
  <StateProvider>
    <TranslateProvider>
      <ThemeProvider>
        <ToastProvider>
          <AppStyled id="app">
            <Main />
          </AppStyled>
        </ToastProvider>
      </ThemeProvider>
    </TranslateProvider>
  </StateProvider>
)

export default App
