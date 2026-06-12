import { Header, Footer } from '~components'
import { LayoutProviderProps } from './interfaces'
import { Box, Container, Stack } from '@mui/material'
import { SkipLinkStyled } from './styles'

const LayoutProvider = ({ children }: LayoutProviderProps) => {
  return (
    <Container maxWidth="xl" sx={{ minHeight: '100dvh' }}>
      <SkipLinkStyled href="#main-content">Skip to main content</SkipLinkStyled>
      <Stack minHeight="100dvh">
        <Header />
        <Box component="main" flex={1} id="main-content">
          {children}
        </Box>
        <Footer />
      </Stack>
    </Container>
  )
}

export default LayoutProvider
