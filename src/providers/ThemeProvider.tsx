import { FC } from 'react'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import theme from '~theme'

const ThemeProvider: FC = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme.dark}>
      <StyledComponentsThemeProvider theme={theme.dark}>
        {children}
      </StyledComponentsThemeProvider>
    </MuiThemeProvider>
  )
}

export default ThemeProvider
