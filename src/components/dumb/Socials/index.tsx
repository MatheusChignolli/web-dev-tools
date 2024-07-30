import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { IconButton, Stack } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Link } from '~components'

const Socials = () => {
  const { t } = useTranslation()

  return (
    <Stack gap={1} flexDirection="row">
      <Link.External
        href="https://github.com/MatheusChignolli/web-dev-tools"
        underline="none"
        color="inherit"
        aria-label={t<string>('footer.ariaLabels.repositoryLink')}
        target="_blank"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <IconButton color="inherit" size="small">
          <GitHubIcon
            color="inherit"
            aria-label={t<string>('icons.ariaLabels.github')}
          />
        </IconButton>
      </Link.External>
      <Link.External
        href="https://www.linkedin.com/in/matheus-chignolli-a0115b155/"
        underline="none"
        color="inherit"
        aria-label={t<string>('footer.ariaLabels.repositoryLink')}
        target="_blank"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <IconButton color="inherit" size="small">
          <LinkedInIcon
            color="inherit"
            aria-label={t<string>('icons.ariaLabels.linkedin')}
          />
        </IconButton>
      </Link.External>
    </Stack>
  )
}

export default Socials
