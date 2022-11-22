import { useTranslation } from 'react-i18next'
import { Typography } from '~components'
import { ExceptionProps } from './interfaces'
import { ContainerStyled } from './styles'

const Exception = ({ code }: ExceptionProps) => {
  const { t } = useTranslation()

  return (
    <ContainerStyled
      maxWidth="sm"
      aria-label={t<string>(`http.ariaLabels.code`, {
        code,
        description: t<string>(`http.codes.${code}.page`),
      })}
    >
      <Typography variant="h2">{code}</Typography>
      <Typography variant="h5">{t<string>(`http.codes.${code}.page`)}</Typography>
    </ContainerStyled>
  )
}

export default Exception
