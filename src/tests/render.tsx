import { ReactElement } from 'react'
import {
  render as TestingLibraryRender,
  RenderOptions,
  RenderResult,
} from '@testing-library/react'
import { StateProvider, ThemeProvider } from '~providers'

const render = (ui: ReactElement, options?: RenderOptions): RenderResult => {
  return TestingLibraryRender(
    <StateProvider>
      <ThemeProvider>{ui}</ThemeProvider>
    </StateProvider>,
    options
  )
}

export default render
