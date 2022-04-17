import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Typography } from '~components'
import { CardProps } from './interfaces'
import { CardStyled } from './styles'

const Card: FC<CardProps> = ({ children, title }) => {
  const { t } = useTranslation()

  return (
    <CardStyled aria-label={t('components.card.section')}>
      {!!title && (
        <Typography
          variant="h6"
          component="h2"
          aria-label={t('components.card.title')}
        >
          {title}
        </Typography>
      )}
      {children}
    </CardStyled>
  )
}

export default Card
