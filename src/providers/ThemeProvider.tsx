import { FC } from 'react'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import theme from '~theme'

const ThemeProvider: FC = ({ children }) => {
  return (
    <StyledComponentsThemeProvider theme={theme.dark}>
      {children}
    </StyledComponentsThemeProvider>
  )
}

export default ThemeProvider
