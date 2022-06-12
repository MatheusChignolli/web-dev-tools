import { QueryClient, QueryClientProvider } from 'react-query'
import { FetchProviderProps } from './interfaces'

const queryClient = new QueryClient()

const FetchProvider = ({ children }: FetchProviderProps) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

export default FetchProvider
