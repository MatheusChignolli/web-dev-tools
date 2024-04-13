import { useTranslation } from 'react-i18next'
import GitHubIcon from '@mui/icons-material/GitHub'
import CopyrightIcon from '@mui/icons-material/Copyright'
import { dateUtils } from '~utils'
import { Link } from '~components'
import { FooterStyled } from './styles'

const Footer = () => {
  const { t } = useTranslation()

  const year = dateUtils.format('', 'yyyy')

  return (
    <>
      <FooterStyled>
        <Link.External
          href="https://github.com/MatheusChignolli/web-dev-tools"
          underline="none"
          color="inherit"
          aria-label={t<string>('footer.ariaLabels.repositoryLink')}
          target="_blank"
        >
          <GitHubIcon aria-label={t<string>('icons.ariaLabels.github')} />
        </Link.External>
        <Link.Internal
          aria-label={t<string>('footer.ariaLabels.changelog')}
          to="/changelog"
        >
          {t<string>('footer.links.changelog')}
        </Link.Internal>
        <p aria-label={t<string>('footer.ariaLabels.copyright')}>
          <b>{year}</b>
          <CopyrightIcon
            sx={{ ml: 0.5 }}
            fontSize="small"
            aria-label={t<string>('icons.ariaLabels.copyright')}
          />
        </p>
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
