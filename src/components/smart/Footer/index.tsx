import { useTranslation } from 'react-i18next'
import CopyrightIcon from '@mui/icons-material/Copyright'
import { dateUtils } from '~utils'
import { Link, Logo, Socials, Ad, LazyAds } from '~components'
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
      <LazyAds minHeight={90}>
        <Ad />
      </LazyAds>
      <FooterStyled>
        <Stack
          justifyContent="space-between"
          gap={2}
          sx={{
            flexDirection: {
              xs: 'column',
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
              variant="body2"
              color="text.secondary"
              aria-label={t<string>('footer.ariaLabels.copyright')}
            >
              {year}
            </Typography>
          </Stack>
          <Stack
            component="nav"
            aria-label={t<string>('footer.ariaLabels.navigation')}
            alignItems="center"
            divider={
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  borderWidth: 1,
                  borderColor: 'divider',
                }}
              />
            }
            gap={2}
            sx={{
              flexDirection: {
                xs: 'column',
                md: 'row',
              },
            }}
          >
            <Socials />
            {internalLinks.map(({ id, path }, index) => (
              <Link.Internal
                key={index}
                aria-label={t<string>(`footer.ariaLabels.${id}`)}
                to={`/${path}`}
              >
                <Typography variant="body2" color="text.secondary" component="span">
                  {t<string>(`footer.links.${id}`)}
                </Typography>
              </Link.Internal>
            ))}
          </Stack>
        </Stack>
      </FooterStyled>
      <LazyAds minHeight={90}>
        <ins
          className="adsbygoogle"
          style={{ display: 'block', minHeight: 90 }}
          data-ad-client="ca-pub-8145397482543766"
          data-ad-slot="4561903753"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </LazyAds>
    </>
  )
}

export default Footer
