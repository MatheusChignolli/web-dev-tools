import { Grid } from '~components'
import { useTheme } from '~hooks'
import { GenerateCpf, GenerateCnpj, GenerateRg } from './sections'

const Main = () => {
  const theme = useTheme()

  return (
    <>
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
    </>
  )
}

export default Main
