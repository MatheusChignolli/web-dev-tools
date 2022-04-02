import { FC } from 'react'
import { useRecoilState } from 'recoil'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { themeState } from '~states'
import theme from '~theme'

const ThemeProvider: FC = ({ children }) => {
  const [appTheme] = useRecoilState(themeState)

  return (
    <MuiThemeProvider theme={theme[appTheme]}>
      <StyledComponentsThemeProvider theme={theme[appTheme]}>
        {children}
      </StyledComponentsThemeProvider>
    </MuiThemeProvider>
  )
}

export default ThemeProvider
