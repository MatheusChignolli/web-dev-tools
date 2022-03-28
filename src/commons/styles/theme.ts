import { spacing } from './utils'

const colors = {
  dark: {
    primary: '#080334',
    secondary: '#020D42',
    tertiary: '#223167',
    quaternary: '#05124B',
    fifth: '#3E73D7',
    white: '#ffffff',
  },
  light: {
    primary: '#080334',
    secondary: '#020D42',
    tertiary: '#223167',
    quaternary: '#05124B',
    fifth: '#3E73D7',
    white: '#ffffff',
  },
} as const

const currentTheme = 'light'

const theme = {
  palette: colors[currentTheme],
  spacing,
} as const

export default theme
