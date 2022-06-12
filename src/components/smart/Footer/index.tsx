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
    <FooterStyled>
      <Link.External
        href="https://github.com/MatheusChignolli/web-dev-tools"
        underline="none"
        color="inherit"
        aria-label={t('footer.ariaLabels.repositoryLink')}
        target="_blank"
      >
        <GitHubIcon aria-label={t('icons.ariaLabels.github')} />
      </Link.External>
      <Link.Internal aria-label={t('footer.ariaLabels.changelog')} to="/changelog">
        {t('footer.links.changelog')}
      </Link.Internal>
      <p aria-label={t('footer.ariaLabels.copyright')}>
        <b>{year}</b>
        <CopyrightIcon
          fontSize="small"
          aria-label={t('icons.ariaLabels.copyright')}
        />
      </p>
    </FooterStyled>
  )
}

export default Footer
