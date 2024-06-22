import { Grid, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { GenerateDocument } from '~components'
import { DocumentsConstants } from '~constants'

const Main = () => {
  const { t } = useTranslation()

  return (
    <Grid container spacing={3}>
      {DocumentsConstants.documentsConfig.map((config, index) => (
        <Grid key={index} item xs={12} md={6}>
          <GenerateDocument {...config} />
        </Grid>
      ))}
      <Grid item xs={12}>
        <Typography variant="body2" textAlign="justify" component="div">
          <div
            dangerouslySetInnerHTML={{
              __html: t<string>('privacyPolicy.notOurResponsibility'),
            }}
          />
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Main
