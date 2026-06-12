type FetchMockResponse = {
  json?: () => unknown
  text?: () => unknown
}

const createFetchMock = (response: FetchMockResponse): typeof fetch =>
  jest.fn(() => Promise.resolve(response)) as unknown as typeof fetch

export default createFetchMock
