import { Main } from '~pages'
import {
  TranslateProvider,
  StateProvider,
  ThemeProvider,
  ToastProvider,
} from '~providers'

const App = () => (
  <StateProvider>
    <ThemeProvider>
      <TranslateProvider>
        <ToastProvider>
          <Main />
        </ToastProvider>
      </TranslateProvider>
    </ThemeProvider>
  </StateProvider>
)

export default App
