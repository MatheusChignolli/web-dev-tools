import ReactMarkdown from './react-markdown'

// @ts-ignore
global.fetch = jest.fn((request) =>
  Promise.resolve({
    text: () => Promise.resolve(request),
  })
)

jest.mock('react-markdown', () => ReactMarkdown)
