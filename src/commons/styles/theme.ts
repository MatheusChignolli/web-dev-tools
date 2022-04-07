import { ThemeOptions } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { spacing } from './utils'

const common: ThemeOptions = {
  spacing,
  typography: {
    fontFamily: 'Fira Code',
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    allVariants: {
      fontFamily: 'Fira Code',
      textTransform: 'none',
    },
  },
  components: {
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
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
  },
  ...common,
})

export default {
  dark,
  light,
}
