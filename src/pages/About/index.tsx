import { Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation()

  return (
    <Stack spacing={5} my={10}>
      <Typography
        color="primary.contrastText"
        variant="h3"
        fontSize={26}
        fontWeight="bold"
      >
        {t('about.title')}
      </Typography>
      <Typography
        color="primary.contrastText"
        variant="body2"
        textAlign="justify"
        component="div"
      >
        <div
          dangerouslySetInnerHTML={{
            __html: t<string>('about.content'),
          }}
        />
      </Typography>
    </Stack>
  )
}

export default About
