import { spacing } from '~utils'

declare module '@mui/material/styles' {
  interface Theme {
    spacing: typeof spacing
  }

  interface ThemeOptions {
    spacing?: typeof spacing
  }
}
