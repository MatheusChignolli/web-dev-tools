import { FC } from 'react'
import { Typography } from '~components'
import { CardProps } from './interfaces'
import { CardStyled } from './styles'

const Card: FC<CardProps> = ({ children, title }) => (
  <CardStyled>
    {!!title && (
      <Typography variant="h6" component="h2">
        {title}
      </Typography>
    )}
    {children}
  </CardStyled>
)

export default Card
