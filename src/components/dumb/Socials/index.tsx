import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { IconButton, Stack } from '@mui/material'
import { useTranslation } from 'react-i18next'

const Socials = () => {
  const { t } = useTranslation()

  return (
    <Stack gap={1} flexDirection="row">
      <IconButton
        component="a"
        href="https://github.com/MatheusChignolli/web-dev-tools"
        target="_blank"
        rel="noopener noreferrer"
        color="inherit"
        size="small"
        aria-label={t<string>('icons.links.github')}
      >
        <GitHubIcon color="inherit" aria-hidden />
      </IconButton>
      <IconButton
        component="a"
        href="https://www.linkedin.com/in/matheus-chignolli-a0115b155/"
        target="_blank"
        rel="noopener noreferrer"
        color="inherit"
        size="small"
        aria-label={t<string>('icons.links.linkedin')}
      >
        <LinkedInIcon color="inherit" aria-hidden />
      </IconButton>
    </Stack>
  )
}

export default Socials
