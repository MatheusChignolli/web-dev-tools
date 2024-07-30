import { Box, Grid, IconButton, Stack, Typography } from '@mui/material'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import { useTranslation } from 'react-i18next'
import { GenerateDocument, Link } from '~components'
import { DocumentsConstants } from '~constants'

const Main = () => {
  const { t } = useTranslation()

  return (
    <Stack spacing={20}>
      <Grid
        item
        xs={12}
        height="calc(100dvh - 76px)"
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
      >
        <Typography
          variant="h1"
          color="primary"
          textAlign="center"
          fontSize={76}
          fontWeight={900}
        >
          {t<string>('header.title')}
        </Typography>
        <Typography
          variant="h2"
          color="primary.contrastText"
          textAlign="center"
          fontSize={28}
          fontWeight={400}
        >
          {t<string>('header.subtitle')}
        </Typography>
        <Link.External
          href="#documents-generator"
          aria-label={t<string>('header.ariaLabels.generateDocumentsLink')}
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
          <IconButton
            size="large"
            color="primary"
            aria-label={t<string>('header.ariaLabels.generateDocumentsLinkButton')}
          >
            <ArrowDownwardIcon fontSize="large" />
          </IconButton>
        </Link.External>
      </Grid>
      <Stack id="documents-generator" spacing={5}>
        <Typography variant="h3" color="primary.contrastText" fontSize={26} mb={2}>
          {t('components.generateDocument.title')}
        </Typography>
        <Box>
          <Grid container spacing={3}>
            {DocumentsConstants.documentsConfig.map((config, index) => (
              <Grid key={index} item xs={12} md={6}>
                <GenerateDocument {...config} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Typography variant="body1" color="primary.contrastText" textAlign="justify">
          {t('components.generateDocument.subtitle')}
        </Typography>
      </Stack>
    </Stack>
  )
}

export default Main
