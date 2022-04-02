import { createTheme } from '@mui/material/styles'
import { spacing } from './utils'

const common = {
  spacing,
  typography: {
    fontFamily: 'Fira Code',
  },
}

const dark = createTheme({
  palette: {
    primary: {
      main: '#020d42',
      light: '#35326e',
      dark: '#00001d',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#223167',
      light: '#515a95',
      dark: '#000a3c',
      contrastText: '#ffffff',
    },
  },
  ...common,
})

const light = createTheme({
  palette: {
    primary: {
      main: '#64b5f6',
      light: '#9be7ff',
      dark: '#2286c3',
      contrastText: '#000000',
    },
    secondary: {
      main: '#4fc3f7',
      light: '#8bf6ff',
      dark: '#0093c4',
      contrastText: '#000000',
    },
  },
  ...common,
})

export default {
  dark,
  light,
}
