import { IconButton } from '~components'
import { ClipboardStyled } from './styles'
import { ClipboardProps } from './interfaces'
import i18n from '~i18n'

const Clipboard = ({ content }: ClipboardProps) => {
  return (
    <ClipboardStyled>
      {content || i18n.t('general.noData')}
      {!!content && <IconButton></IconButton>}
    </ClipboardStyled>
  )
}

export default Clipboard
