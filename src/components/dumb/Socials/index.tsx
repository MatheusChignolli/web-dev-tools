import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { Box, Stack } from '@mui/material'
import { useTranslation } from 'react-i18next'

const socialLinkStyles = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 40,
  height: 40,
  borderRadius: 1,
  color: 'inherit',
  textDecoration: 'none',
}

const Socials = () => {
  const { t } = useTranslation()

  return (
    <Stack gap={1} flexDirection="row">
      <Box
        component="a"
        href="https://github.com/MatheusChignolli/web-dev-tools"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t<string>('icons.links.github')}
        sx={socialLinkStyles}
      >
        <GitHubIcon fontSize="small" aria-hidden />
      </Box>
      <Box
        component="a"
        href="https://www.linkedin.com/in/matheus-chignolli-a0115b155/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t<string>('icons.links.linkedin')}
        sx={socialLinkStyles}
      >
        <LinkedInIcon fontSize="small" aria-hidden />
      </Box>
    </Stack>
  )
}

export default Socials
