import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { useTheme } from '~hooks'
import { themeState } from '~states'
import { ThemeProviderProps } from './interfaces'

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const theme = useTheme()
  const appTheme = useRecoilValue(themeState)

  useEffect(() => {
    document.documentElement.dataset.theme = appTheme
  }, [appTheme])

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <StyledComponentsThemeProvider theme={theme}>
        {children}
      </StyledComponentsThemeProvider>
    </MuiThemeProvider>
  )
}

export default ThemeProvider
