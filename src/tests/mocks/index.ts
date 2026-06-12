import ReactMarkdown from './react-markdown'
import createFetchMock from './fetch'

global.fetch = createFetchMock({
  json: jest.fn(),
  text: jest.fn(),
})

jest.mock('react-markdown', () => ReactMarkdown)
