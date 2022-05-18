import { Main } from '~pages'
import {
  TranslateProvider,
  StateProvider,
  ThemeProvider,
  ToastProvider,
  AnalyticsProvider,
} from '~providers'

const App = () => (
  <AnalyticsProvider>
    <StateProvider>
      <ThemeProvider>
        <TranslateProvider>
          <ToastProvider>
            <Main />
          </ToastProvider>
        </TranslateProvider>
      </ThemeProvider>
    </StateProvider>
  </AnalyticsProvider>
)

export default App
