import { useTranslation } from 'react-i18next'
import { Grid, Typography } from '~components'
import { useTheme } from '~hooks'
import { GenerateCpf, GenerateCnpj, GenerateRg } from './sections'

const Main = () => {
  const theme = useTheme()
  const { t } = useTranslation()

  return (
    <Grid container padding={`${theme.spacing(2)} 0px`} spacing={1}>
      <Grid item xs={12} sm={6} md={4}>
        <GenerateCpf />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <GenerateCnpj />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <GenerateRg />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2" textAlign="justify">
          {t<string>('privacyPolicy.notOurResponsibility')}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Main
