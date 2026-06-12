import 'styled-components'
import { Theme as MuiTheme } from '@mui/material/styles'
import { spacing } from '~utils'

declare module '@mui/material/styles' {
  interface Theme {
    spacing: typeof spacing
  }

  interface ThemeOptions {
    spacing?: typeof spacing
  }
}

declare module 'styled-components' {
  export interface DefaultTheme extends MuiTheme {}
}
