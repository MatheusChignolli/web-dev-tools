import { Main } from '~pages'
import { StateProvider, ThemeProvider, ToastProvider } from '~providers'
import { AppStyled } from './styles'
import 'react-toastify/dist/ReactToastify.css'

const App = () => (
  <StateProvider>
    <ThemeProvider>
      <ToastProvider>
        <AppStyled id="app">
          <Main />
        </AppStyled>
      </ToastProvider>
    </ThemeProvider>
  </StateProvider>
)

export default App
