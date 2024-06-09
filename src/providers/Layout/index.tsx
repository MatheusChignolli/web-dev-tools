import { Header, Footer } from '~components'
import { LayoutProviderProps } from './interfaces'
import { Box, Container, Stack } from '@mui/material'

const LayoutProvider = ({ children }: LayoutProviderProps) => {
  return (
    <Container>
      <Stack minHeight="100dvh">
        <Header />
        <Box flex={1}>{children}</Box>
        <Footer />
      </Stack>
    </Container>
  )
}

export default LayoutProvider
