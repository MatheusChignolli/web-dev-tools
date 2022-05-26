import { Grid, Header, Footer } from '~components'
import { useTheme } from '~hooks'
import { GenerateCpf, GenerateCnpj, GenerateRg } from './sections'
import { ContainerStyled } from './styles'

const Main = () => {
  const theme = useTheme()

  return (
    <>
      <ContainerStyled>
        <Header />
        <Grid container padding={`${theme.spacing(2)} 0px`}>
          <Grid item xs={12} sm={6} md={4} padding={theme.spacing(1)}>
            <GenerateCpf />
          </Grid>
          <Grid item xs={12} sm={6} md={4} padding={theme.spacing(1)}>
            <GenerateCnpj />
          </Grid>
          <Grid item xs={12} sm={6} md={4} padding={theme.spacing(1)}>
            <GenerateRg />
          </Grid>
        </Grid>
        <Footer />
      </ContainerStyled>
    </>
  )
}

export default Main
