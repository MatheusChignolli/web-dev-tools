import { format } from 'date-fns'
import GitHubIcon from '@mui/icons-material/GitHub'
import CopyrightIcon from '@mui/icons-material/Copyright'
import { Link } from '~components'
import i18n from '~i18n'
import { FooterStyled } from './styles'

const Footer = () => {
  const year = format(new Date(), 'yyyy')

  return (
    <FooterStyled>
      <Link
        href="https://github.com/MatheusChignolli/web-dev-tools"
        underline="none"
        color="inherit"
        aria-label={i18n.t('footer.ariaLabels.repositoryLink')}
      >
        <GitHubIcon aria-label={i18n.t('icons.ariaLabels.github')} />
      </Link>
      <p aria-label={i18n.t('footer.ariaLabels.copyright')}>
        <b>{year}</b>
        <CopyrightIcon
          fontSize="small"
          aria-label={i18n.t('icons.ariaLabels.copyright')}
        />
      </p>
    </FooterStyled>
  )
}

export default Footer
