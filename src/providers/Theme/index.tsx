import { ReactNode } from 'react'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { useTheme } from '~hooks'
import { ThemeProviderProps } from './interfaces'

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const theme = useTheme()

  return (
    <MuiThemeProvider theme={theme}>
      <StyledComponentsThemeProvider theme={theme}>
        {children as ReactNode}
      </StyledComponentsThemeProvider>
    </MuiThemeProvider>
  )
}

export default ThemeProvider
