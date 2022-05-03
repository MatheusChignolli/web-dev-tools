import { ReactElement } from 'react'
import {
  render as TestingLibraryRender,
  RenderOptions,
  RenderResult,
} from '@testing-library/react'
import {
  StateProvider,
  ThemeProvider,
  ToastProvider,
  TranslateProvider,
} from '~providers'
import '~i18n'

const render = (ui: ReactElement, options?: RenderOptions): RenderResult => {
  return TestingLibraryRender(
    <StateProvider>
      <ThemeProvider>
        <ToastProvider>
          <TranslateProvider>{ui}</TranslateProvider>
        </ToastProvider>
      </ThemeProvider>
    </StateProvider>,
    options
  )
}

export default render
