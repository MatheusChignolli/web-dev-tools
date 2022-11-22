import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { KeycapProps } from './interfaces'
import { KeycapStyled } from './styles'

const Keycap = ({ text }: KeycapProps) => {
  const { t } = useTranslation()

  return (
    <KeycapStyled aria-label={t<string>('components.keycap.content', { key: text })}>
      {text}
    </KeycapStyled>
  )
}

export default memo(Keycap)
