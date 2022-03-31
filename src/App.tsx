import { Main } from '~pages'
import { ThemeProvider } from '~providers'
import { AppStyled } from './styles'

const App = () => (
  <ThemeProvider>
    <AppStyled id="app">
      <Main />
    </AppStyled>
  </ThemeProvider>
)

export default App
