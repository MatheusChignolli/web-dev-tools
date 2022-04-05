import { memo, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { IconButton } from '~components'
import { ClipboardStyled } from './styles'
import { ClipboardProps } from './interfaces'
import toast from '~toast'

const Clipboard = ({ content }: ClipboardProps) => {
  const { t } = useTranslation()

  const copyToClipboard = () => {
    if (!!content) {
      navigator.clipboard.writeText(content)
      toast.success(t('components.clipboard.alerts.success', { content }))
    }
  }

  useEffect(() => {
    copyToClipboard()
  }, [content])

  return (
    <ClipboardStyled>
      {content || t('general.noData')}
      {!!content && (
        <IconButton
          size="small"
          color="inherit"
          onClick={copyToClipboard}
          aria-label={t('components.clipboard.copyButton')}
        >
          <ContentCopyIcon aria-label={t('icons.ariaLabels.copy')} />
        </IconButton>
      )}
    </ClipboardStyled>
  )
}

export default memo(Clipboard)
