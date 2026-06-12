import { Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { SEO } from '~components'

const TermsOfUse = () => {
  const { t } = useTranslation()

  return (
    <>
      <SEO page="termsOfUse" />
      <Stack spacing={5} my={10}>
        <Typography
          color="text.primary"
          variant="h3"
          fontSize={26}
          fontWeight="bold"
        >
          {t('termsOfUse.title')}
        </Typography>
        <Typography
          color="text.primary"
          variant="body2"
          textAlign="justify"
          component="div"
        >
          <div
            dangerouslySetInnerHTML={{
              __html: t<string>('termsOfUse.content'),
            }}
          />
        </Typography>
      </Stack>
    </>
  )
}

export default TermsOfUse
