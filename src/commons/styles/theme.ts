import { ThemeOptions } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { spacing } from './utils'

const brand = {
  accent: '#58a6ff',
  accentLight: '#79c0ff',
  accentDark: '#1f6feb',
  darkBg: '#0d1117',
  darkPaper: '#161b22',
  darkBorder: '#30363d',
  lightBg: '#ffffff',
  lightPaper: '#f6f8fa',
  lightBorder: '#d0d7de',
  textDark: '#f0f6fc',
  textDarkMuted: '#8b949e',
  textLight: '#0d1117',
  textLightMuted: '#57606a',
} as const

const getCommonConfig = (
  palette: typeof darkPalette | typeof lightPalette,
  divider: string,
): ThemeOptions => ({
  spacing,
  shape: {
    borderRadius: 10,
  },
  typography: {
    fontFamily: '"Fira Code", monospace',
    fontSize: 16,
    allVariants: {
      fontFamily: '"Fira Code", monospace',
      textTransform: 'none',
    },
    h1: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 600,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          transition: 'background-color 0.2s ease, color 0.2s ease',
        },
        '::selection': {
          backgroundColor: brand.accent,
          color: brand.darkBg,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          borderRadius: 8,
          textTransform: 'none',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& label': {
            color: palette.text.secondary,
          },
          '& label.Mui-focused': {
            color: palette.primary.main,
          },
          '& .MuiOutlinedInput-root': {
            color: palette.text.primary,
            backgroundColor: palette.background.paper,
            '& fieldset': {
              borderColor: divider,
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
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          borderRadius: 4,
        },
      },
    },
  },
})

const darkPalette = {
  background: {
    default: brand.darkBg,
    paper: brand.darkPaper,
  },
  primary: {
    main: brand.accent,
    light: brand.accentLight,
    dark: brand.accentDark,
    contrastText: brand.darkBg,
  },
  text: {
    primary: brand.textDark,
    secondary: brand.textDarkMuted,
  },
  divider: brand.darkBorder,
}

const lightPalette = {
  background: {
    default: brand.lightBg,
    paper: brand.lightPaper,
  },
  primary: {
    main: brand.accent,
    light: brand.accentLight,
    dark: brand.accentDark,
    contrastText: brand.textLight,
  },
  text: {
    primary: brand.textLight,
    secondary: brand.textLightMuted,
  },
  divider: brand.lightBorder,
}

const dark = createTheme({
  palette: darkPalette,
  ...getCommonConfig(darkPalette, brand.darkBorder),
})

const light = createTheme({
  palette: lightPalette,
  ...getCommonConfig(lightPalette, brand.lightBorder),
})

export default {
  dark,
  light,
}
