import { memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Keycap, Typography } from '~components'
import { CardProps } from './interfaces'
import { CardStyled, KeysComboStyled } from './styles'

const Card = ({ children, title, keys, fullHeight }: CardProps) => {
  const { t } = useTranslation()

  const combinedKeys = useMemo(() => {
    let combined = ''

    if (!keys?.length) {
      return combined
    }

    keys.forEach((key, index) => {
      combined = combined + (index === 0 ? key : ` mais ${key}`)
    })

    return combined
  }, [keys])

  return (
    <CardStyled aria-label={t('components.card.section')} fullHeight={fullHeight}>
      {!!title && (
        <Typography
          variant="h6"
          component="h2"
          aria-label={t('components.card.title')}
        >
          {title}
        </Typography>
      )}
      {!!keys?.length && (
        <KeysComboStyled
          aria-label={t('components.card.keycaps', {
            keys: combinedKeys,
          })}
        >
          {keys.map((key, index) => (
            <Keycap key={`key-${key}-${index}`} text={key} />
          ))}
        </KeysComboStyled>
      )}
      {children}
    </CardStyled>
  )
}

export default memo(Card)
