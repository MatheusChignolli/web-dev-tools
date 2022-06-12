import ReactMarkdown from './react-markdown'

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: jest.fn(),
    text: jest.fn(),
  })
) as any

jest.mock('react-markdown', () => ReactMarkdown)
