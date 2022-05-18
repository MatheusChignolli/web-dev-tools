import { Grid, Header, Footer } from '~components'
import { useTheme } from '~hooks'
import { GenerateCpf, GenerateCnpj } from './sections'
import { ContainerStyled } from './styles'

const Main = () => {
  const theme = useTheme()

  return (
    <>
      <ContainerStyled>
        <Header />
        <Grid container gap={2} padding={`${theme.spacing(2)} 0px`}>
          <Grid item xs={12} sm={6} md={4}>
            <GenerateCpf />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <GenerateCnpj />
          </Grid>
        </Grid>
        <Footer />
      </ContainerStyled>
    </>
  )
}

export default Main
