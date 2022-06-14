import { useTranslation } from 'react-i18next'
import { Typography } from '~components'
import { ExceptionProps } from './interfaces'
import { ContainerStyled } from './styles'

const Exception = ({ code }: ExceptionProps) => {
  const { t } = useTranslation()

  return (
    <ContainerStyled
      maxWidth="sm"
      aria-label={t(`http.ariaLabels.code`, {
        code,
        description: t(`http.codes.${code}.page`),
      })}
    >
      <Typography variant="h2">{code}</Typography>
      <Typography variant="h5">{t(`http.codes.${code}.page`) as string}</Typography>
    </ContainerStyled>
  )
}

export default Exception
