import { FC } from 'react'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { useTheme } from '~hooks'

const ThemeProvider: FC = ({ children }) => {
  const theme = useTheme()

  return (
    <MuiThemeProvider theme={theme}>
      <StyledComponentsThemeProvider theme={theme}>
        {children}
      </StyledComponentsThemeProvider>
    </MuiThemeProvider>
  )
}

export default ThemeProvider
