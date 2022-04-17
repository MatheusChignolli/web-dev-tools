import { format } from 'date-fns'
import { useTranslation } from 'react-i18next'
import GitHubIcon from '@mui/icons-material/GitHub'
import CopyrightIcon from '@mui/icons-material/Copyright'
import { Link } from '~components'
import { FooterStyled } from './styles'

const Footer = () => {
  const { t } = useTranslation()

  const year = format(new Date(), 'yyyy')

  return (
    <FooterStyled>
      <Link
        href="https://github.com/MatheusChignolli/web-dev-tools"
        underline="none"
        color="inherit"
        aria-label={t('footer.ariaLabels.repositoryLink')}
        target="_blank"
      >
        <GitHubIcon aria-label={t('icons.ariaLabels.github')} />
      </Link>
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
