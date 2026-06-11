import { Header, Footer } from '~components'
import { LayoutProviderProps } from './interfaces'
import { Box, Container, Stack } from '@mui/material'

const LayoutProvider = ({ children }: LayoutProviderProps) => {
  return (
    <Container maxWidth="xl">
      <a
        href="#main-content"
        style={{
          position: 'absolute',
          left: '-9999px',
          top: 'auto',
          width: '1px',
          height: '1px',
          overflow: 'hidden',
        }}
        onFocus={(event) => {
          event.currentTarget.style.position = 'static'
          event.currentTarget.style.width = 'auto'
          event.currentTarget.style.height = 'auto'
        }}
        onBlur={(event) => {
          event.currentTarget.style.position = 'absolute'
          event.currentTarget.style.width = '1px'
          event.currentTarget.style.height = '1px'
        }}
      >
        Skip to main content
      </a>
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
