import { Container, Header, Footer } from '~components'
import { LayoutProviderProps } from './interfaces'

const LayoutProvider = ({ children }: LayoutProviderProps) => {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  )
}

export default LayoutProvider
