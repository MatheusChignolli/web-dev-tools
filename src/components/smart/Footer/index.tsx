import { format } from 'date-fns'
import GitHubIcon from '@mui/icons-material/GitHub'
import CopyrightIcon from '@mui/icons-material/Copyright'
import { Link } from '~components'
import { FooterStyled } from './styles'

const Footer = () => {
  const year = format(new Date(), 'yyyy')

  return (
    <FooterStyled>
      <Link
        href="https://github.com/MatheusChignolli/web-dev-tools"
        underline="none"
        color="inherit"
        aria-label="Link para o repositório do projeto"
      >
        <GitHubIcon aria-label="Ícone do GitHub arredondado e sem bordas" />
      </Link>
      <p aria-label="Texto com o ano vigente e um ícone de Copyright">
        <b>{year}</b>
        <CopyrightIcon
          fontSize="small"
          aria-label="Ícone de apenas a borda de um círculo com a letra C no centro"
        />
      </p>
    </FooterStyled>
  )
}

export default Footer
