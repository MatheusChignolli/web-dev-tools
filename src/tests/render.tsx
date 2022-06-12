import { ReactElement } from 'react'
import {
  render as TestingLibraryRender,
  RenderOptions,
  RenderResult,
} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import {
  FetchProvider,
  StateProvider,
  ThemeProvider,
  ToastProvider,
  TranslateProvider,
} from '~providers'
import '~i18n'

const render = (ui: ReactElement, options?: RenderOptions): RenderResult => {
  return TestingLibraryRender(
    <FetchProvider>
      <BrowserRouter>
        <StateProvider>
          <ThemeProvider>
            <ToastProvider>
              <TranslateProvider>{ui}</TranslateProvider>
            </ToastProvider>
          </ThemeProvider>
        </StateProvider>
      </BrowserRouter>
    </FetchProvider>,
    options
  )
}

export default render
