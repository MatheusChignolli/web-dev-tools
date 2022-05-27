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
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          background: '#616161',
        },
      },
    },
    MuiIconButton: {
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
      main: '#004445',
      light: '#2C7873',
      dark: '#021C1E',
      contrastText: '#ffffff',
    },
  },
  ...common,
})

const light = createTheme({
  palette: {
    primary: {
      main: '#A1D6E2',
      light: '#F1F1F2',
      dark: '#1995AD',
      contrastText: '#000000',
    },
  },
  ...common,
})

export default {
  dark,
  light,
}
