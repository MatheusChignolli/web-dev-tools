import { ReactElement } from 'react'
import {
  render as TestingLibraryRender,
  RenderOptions,
  RenderResult,
} from '@testing-library/react'
import { StateProvider, ThemeProvider, ToastProvider } from '~providers'

const render = (ui: ReactElement, options?: RenderOptions): RenderResult => {
  return TestingLibraryRender(
    <StateProvider>
      <ThemeProvider>
        <ToastProvider>{ui}</ToastProvider>
      </ThemeProvider>
    </StateProvider>,
    options
  )
}

export default render
