import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { CardProps } from './interfaces'
import { CardStyled } from './styles'
import { Typography } from '@mui/material'

const Card = ({ children, title, fullHeight }: CardProps) => {
  const { t } = useTranslation()

  return (
    <CardStyled
      aria-label={t<string>('components.card.section')}
      fullHeight={fullHeight}
    >
      {!!title && (
        <Typography
          variant="h6"
          component="h2"
          aria-label={t<string>('components.card.title')}
        >
          {title}
        </Typography>
      )}
      {children}
    </CardStyled>
  )
}

export default memo(Card)
