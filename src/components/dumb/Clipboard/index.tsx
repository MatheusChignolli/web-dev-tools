import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { IconButton } from '~components'
import { ClipboardStyled } from './styles'
import { ClipboardProps } from './interfaces'
import i18n from '~i18n'
import toast from '~toast'

const Clipboard = ({ content }: ClipboardProps) => {
  const copyToClipboard = () => {
    if (!!content) {
      navigator.clipboard.writeText(content)
      toast.success(i18n.t('components.clipboard.alerts.success', { content }))
    }
  }

  return (
    <ClipboardStyled>
      {content || i18n.t('general.noData')}
      {!!content && (
        <IconButton
          size="small"
          color="inherit"
          onClick={copyToClipboard}
          aria-label={i18n.t('components.clipboard.copyButton')}
        >
          <ContentCopyIcon aria-label={i18n.t('icons.ariaLabels.copy')} />
        </IconButton>
      )}
    </ClipboardStyled>
  )
}

export default Clipboard
