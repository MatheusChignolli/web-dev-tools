import { useMemo } from 'react'
import { Keycap } from '~components'
import { KeysComboStyled } from './styles'
import { useTranslation } from 'react-i18next'
import { KeysComboProps } from './interfaces'

const KeysCombo = ({ keys }: KeysComboProps) => {
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

  if (!keys?.length) return null

  return (
    <KeysComboStyled
      aria-label={t<string>('components.card.keycaps', {
        keys: combinedKeys,
      })}
    >
      {keys.map((key, index) => (
        <Keycap key={`key-${key}-${index}`} text={key} />
      ))}
    </KeysComboStyled>
  )
}

export default KeysCombo
