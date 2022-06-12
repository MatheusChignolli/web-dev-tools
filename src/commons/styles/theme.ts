import { ThemeOptions } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { spacing } from './utils'

const darkPalette = {
  primary: {
    main: '#004445',
    light: '#2C7873',
    dark: '#021C1E',
    contrastText: '#ffffff',
  },
} as const

const lightPalette = {
  primary: {
    main: '#A1D6E2',
    light: '#F1F1F2',
    dark: '#1995AD',
    contrastText: '#000000',
  },
} as const

const getCommonConfig = (
  palette: typeof darkPalette | typeof lightPalette
): ThemeOptions => ({
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
          background: palette.primary.dark,
        },
        arrow: {
          '::before': {
            background: palette.primary.dark,
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: 0,
          borderRadius: '4px',
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          background: palette.primary.main,
          boxShadow: 'none',
          color: palette.primary.contrastText,
          '&::before': {
            background: palette.primary.dark,
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          '&.Mui-expanded': {
            borderBottom: `1px solid ${palette.primary.dark}`,
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
