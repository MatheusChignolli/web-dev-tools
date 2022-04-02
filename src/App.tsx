import { Main } from '~pages'
import { StateProvider, ThemeProvider } from '~providers'
import { AppStyled } from './styles'

const App = () => (
  <StateProvider>
    <ThemeProvider>
      <AppStyled id="app">
        <Main />
      </AppStyled>
    </ThemeProvider>
  </StateProvider>
)

export default App
