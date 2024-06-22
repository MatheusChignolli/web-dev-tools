import { Grid, IconButton, Typography } from '@mui/material'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import { useTranslation } from 'react-i18next'
import { GenerateDocument, Link } from '~components'
import { DocumentsConstants } from '~constants'

const Main = () => {
  const { t } = useTranslation()

  return (
    <Grid container spacing={3}>
      <Grid
        item
        xs={12}
        height="calc(100dvh - 52px)"
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
      >
        <Typography textAlign="center" color="primary" fontWeight={900} variant="h2">
          {t<string>('header.title')}
        </Typography>
        <Typography
          textAlign="center"
          color="primary.contrastText"
          fontWeight={400}
          variant="h5"
        >
          {t<string>('header.subtitle')}
        </Typography>
        <Link.External
          href="#documents-generator"
          sx={{
            mt: 10,
            position: 'relative',
            '&::before': {
              content: `" "`,
              width: '3.5px',
              height: '20px',
              background: (theme) => theme.palette.primary.main,
              position: 'absolute',
              top: '0px',
              left: '50%',
              right: '50%',
              transform: 'translate(-50%, -50%)',
            },
            '&::after': {
              content: `" "`,
              width: '3.5px',
              height: '20px',
              background: (theme) => theme.palette.primary.main,
              position: 'absolute',
              top: '-28px',
              left: '50%',
              right: '50%',
              transform: 'translate(-50%, -50%)',
            },
          }}
        >
          <IconButton size="large" color="primary">
            <ArrowDownwardIcon fontSize="large" />
          </IconButton>
        </Link.External>
      </Grid>
      <Grid id="documents-generator" item xs={12}>
        <Typography color="primary.contrastText" variant="h6" mb={2}>
          {t('components.generateDocument.title')}
        </Typography>
        <Typography color="primary.contrastText" variant="body1">
          {t('components.generateDocument.subtitle')}
        </Typography>
      </Grid>
      {DocumentsConstants.documentsConfig.map((config, index) => (
        <Grid key={index} item xs={12} md={6}>
          <GenerateDocument {...config} />
        </Grid>
      ))}
      <Grid item xs={12}>
        <Typography color="primary.contrastText" mb={2} variant="h6">
          {t('privacyPolicy.title')}
        </Typography>
        <Typography
          color="primary.contrastText"
          variant="body2"
          textAlign="justify"
          component="div"
        >
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
