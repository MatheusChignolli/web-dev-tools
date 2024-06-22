import { useEffect } from 'react'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { useTheme } from '~hooks'
import { ThemeProviderProps } from './interfaces'

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const theme = useTheme()

  useEffect(() => {
    document.body.style.backgroundColor = theme.palette.background.default
  })

  return (
    <MuiThemeProvider theme={theme}>
      {/* @ts-ignore */}
      <StyledComponentsThemeProvider theme={theme}>
        {children}
      </StyledComponentsThemeProvider>
    </MuiThemeProvider>
  )
}

export default ThemeProvider
