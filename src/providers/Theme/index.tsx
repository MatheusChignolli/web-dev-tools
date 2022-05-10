import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { useTheme } from '~hooks'
import { ThemeProviderProps } from './interfaces'
import { SectionStyled } from './styles'

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const theme = useTheme()

  return (
    <MuiThemeProvider theme={theme}>
      <StyledComponentsThemeProvider theme={theme}>
        <SectionStyled>{children}</SectionStyled>
      </StyledComponentsThemeProvider>
    </MuiThemeProvider>
  )
}

export default ThemeProvider
