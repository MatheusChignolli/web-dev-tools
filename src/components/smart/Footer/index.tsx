import { useTranslation } from 'react-i18next'
import GitHubIcon from '@mui/icons-material/GitHub'
import CopyrightIcon from '@mui/icons-material/Copyright'
import { dateUtils } from '~utils'
import { Link, Logo } from '~components'
import { FooterStyled } from './styles'
import { Divider, Stack, Typography } from '@mui/material'

const internalLinks = [
  {
    id: 'home',
    path: '',
  },
  {
    id: 'contact',
    path: 'contact',
  },
  {
    id: 'about',
    path: 'about',
  },
  {
    id: 'privacyPolicy',
    path: 'privacy-policy',
  },
  {
    id: 'termsOfUse',
    path: 'terms-of-use',
  },
  {
    id: 'changelog',
    path: 'changelog',
  },
]

const Footer = () => {
  const { t } = useTranslation()

  const year = dateUtils.format('', 'yyyy')

  return (
    <>
      <FooterStyled>
        <Stack
          justifyContent="space-between"
          gap={2}
          sx={{
            flexDirection: {
              xs: 'collumn',
              md: 'row',
            },
          }}
        >
          <Stack
            alignItems="center"
            justifyContent="center"
            flexDirection="row"
            gap={1}
          >
            <Logo />
            <CopyrightIcon
              fontSize="small"
              aria-label={t<string>('icons.ariaLabels.copyright')}
            />
            <Typography
              variant="body1"
              aria-label={t<string>('footer.ariaLabels.copyright')}
            >
              {year}
            </Typography>
          </Stack>
          <Stack
            alignItems="center"
            divider={
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  borderWidth: 1,
                  borderColor: (theme) => theme.palette.primary.dark,
                }}
              />
            }
            gap={2}
            sx={{
              flexDirection: {
                xs: 'collumn',
                md: 'row',
              },
            }}
          >
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
              <GitHubIcon aria-label={t<string>('icons.ariaLabels.github')} />
            </Link.External>
            {internalLinks.map(({ id, path }, index) => (
              <Link.Internal
                key={index}
                aria-label={t<string>(`footer.ariaLabels.${id}`)}
                to={`/${path}`}
              >
                {t<string>(`footer.links.${id}`)}
              </Link.Internal>
            ))}
          </Stack>
        </Stack>
      </FooterStyled>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-8145397482543766"
        data-ad-slot="4561903753"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </>
  )
}

export default Footer
