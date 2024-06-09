import { ReactElement } from 'react'
import {
  render as TestingLibraryRender,
  RenderOptions,
  RenderResult,
} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ThemeProvider, TranslateProvider, StateProvider } from '~providers'
import '~i18n'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
})

const render = (ui: ReactElement, options?: RenderOptions): RenderResult => {
  return TestingLibraryRender(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <StateProvider>
          <ThemeProvider>
            <TranslateProvider>{ui}</TranslateProvider>
          </ThemeProvider>
        </StateProvider>
      </BrowserRouter>
    </QueryClientProvider>,
    options
  )
}

export default render
