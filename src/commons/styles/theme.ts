import { ThemeOptions } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { spacing } from './utils'

const darkPalette = {
  background: {
    default: '#1E2227',
    paper: '#2B333F',
  },
  primary: {
    main: '#0077CC',
    light: '#0096FF',
    dark: '#005EA2',
    contrastText: '#FFFFFF',
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#B0BEC5',
  },
}

const lightPalette = {
  background: {
    default: '#FFFFFF',
    paper: '#F5F6F7',
  },
  primary: {
    main: '#F48024',
    light: '#FFB74D',
    dark: '#C26005',
    contrastText: '#000000',
  },
  text: {
    primary: '#000000',
    secondary: '#757575',
  },
}

const getCommonConfig = (
  palette: typeof darkPalette | typeof lightPalette
): ThemeOptions => ({
  spacing,
  typography: {
    fontFamily: 'Fira Code',
    fontSize: 16,
    allVariants: {
      fontFamily: 'Fira Code',
      textTransform: 'none',
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& label': {
            color: palette.primary.main,
          },
          '& label.Mui-focused': {
            color: palette.primary.main,
          },
          '& .MuiOutlinedInput-root': {
            color: palette.primary.main,
            '& fieldset': {
              borderColor: palette.primary.main,
            },
            '&:hover fieldset': {
              borderColor: palette.primary.main,
            },
            '&.Mui-focused fieldset': {
              borderColor: palette.primary.main,
            },
          },
        },
      },
    },
  },
})

const dark = createTheme({
  palette: darkPalette,
  ...getCommonConfig(darkPalette),
})

const light = createTheme({
  palette: lightPalette,
  ...getCommonConfig(lightPalette),
})

export default {
  dark,
  light,
}
