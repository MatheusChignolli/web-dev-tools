import { ThemeOptions } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { spacing } from './utils'

const darkPalette = {
  primary: {
    main: '#414141',
    light: '#525252',
    dark: '#313131',
    contrastText: '#ffffff',
  },
} as const

const lightPalette = {
  primary: {
    main: '#F9F6F7',
    light: '#FFFFFF',
    dark: '#E0E0E0',
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
    MuiTypography: {
      styleOverrides: {
        root: {
          color: palette.primary.contrastText,
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: palette.primary.light,
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          background: palette.primary.dark,
          color: palette.primary.contrastText,
        },
        arrow: {
          '::before': {
            background: palette.primary.dark,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& label': {
            color: palette.primary.contrastText,
          },
          '& label.Mui-focused': {
            color: palette.primary.contrastText,
          },
          '& .MuiOutlinedInput-root': {
            color: palette.primary.contrastText,
            '& fieldset': {
              borderColor: palette.primary.contrastText,
            },
            '&:hover fieldset': {
              borderColor: palette.primary.contrastText,
            },
            '&.Mui-focused fieldset': {
              borderColor: palette.primary.contrastText,
            },
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: palette.primary.contrastText,
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
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: palette.primary.contrastText,
          '&.Mui-checked': {
            color: palette.primary.contrastText,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        text: {
          color: palette.primary.contrastText,
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
