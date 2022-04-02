import { Container, Grid, Header, Footer } from '~components'
import { useTheme } from '~hooks'
import { GenerateCpf } from './sections'

const Main = () => {
  const theme = useTheme()

  return (
    <>
      <Container>
        <Header />
        <Grid container gap={2} padding={`${theme.spacing(2)} 0px`}>
          <Grid item xs={4}>
            <GenerateCpf />
          </Grid>
        </Grid>
        <Footer />
      </Container>
    </>
  )
}

export default Main
