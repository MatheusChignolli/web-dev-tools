import { Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

const TermsOfUse = () => {
  const { t } = useTranslation()

  return (
    <Stack spacing={5} my={10}>
      <Typography
        color="primary.contrastText"
        variant="h3"
        fontSize={26}
        fontWeight="bold"
      >
        {t('termsOfUse.title')}
      </Typography>
      <Typography
        color="primary.contrastText"
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
  )
}

export default TermsOfUse
