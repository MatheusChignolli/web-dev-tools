import { Box, Grid, IconButton, Stack, Typography } from '@mui/material'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import { useTranslation } from 'react-i18next'
import { GenerateDocument, Link, SEO } from '~components'
import { DocumentsConstants } from '~constants'

const Main = () => {
  const { t } = useTranslation()

  return (
    <>
      <SEO page="home" />
      <Stack spacing={{ xs: 10, md: 14 }}>
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
          minHeight={{ xs: '50dvh', md: 'calc(100dvh - 96px)' }}
          textAlign="center"
          gap={2}
        >
          <Box
            component="img"
            src="/favicon.svg"
            alt=""
            aria-hidden
            width={72}
            height={72}
            sx={{ mb: 1 }}
          />
          <Typography
            variant="h1"
            color="text.primary"
            fontSize={{ xs: 40, sm: 52, md: 60 }}
            fontWeight={700}
            lineHeight={1.1}
          >
            {t<string>('header.title')}
          </Typography>
          <Typography
            variant="h2"
            color="text.secondary"
            fontSize={{ xs: 18, sm: 22 }}
            fontWeight={400}
            maxWidth={640}
          >
            {t<string>('header.subtitle')}
          </Typography>
          <Link.External
            href="#documents-generator"
            aria-label={t<string>('header.ariaLabels.generateDocumentsLink')}
            sx={{ mt: 4 }}
          >
            <IconButton
              size="large"
              color="primary"
              aria-label={t<string>('header.ariaLabels.generateDocumentsLinkButton')}
              sx={{
                border: 1,
                borderColor: 'divider',
                backgroundColor: 'background.paper',
              }}
            >
              <ArrowDownwardIcon fontSize="large" />
            </IconButton>
          </Link.External>
        </Box>
        <Stack id="documents-generator" spacing={4}>
          <Typography variant="h3" color="text.primary" fontSize={24}>
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
          <Typography variant="body1" color="text.secondary" textAlign="justify">
            {t('components.generateDocument.subtitle')}
          </Typography>
        </Stack>
      </Stack>
    </>
  )
}

export default Main
