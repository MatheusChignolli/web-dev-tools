import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { useTheme } from '~hooks'
import { ThemeProviderProps } from './interfaces'

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const theme = useTheme()
  console.log(children)

  return (
    <MuiThemeProvider theme={theme}>
      <StyledComponentsThemeProvider theme={theme}>
        teste
      </StyledComponentsThemeProvider>
    </MuiThemeProvider>
  )
}

export default ThemeProvider
