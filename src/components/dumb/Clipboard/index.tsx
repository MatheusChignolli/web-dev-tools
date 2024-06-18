import { memo, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { IconButton, Tooltip, Typography } from '@mui/material'
import { ClipboardStyled } from './styles'
import { ClipboardProps } from './interfaces'

const Clipboard = ({ content }: ClipboardProps) => {
  const { t } = useTranslation()
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    if (!!content) {
      navigator.clipboard.writeText(content)

      setCopied(true)

      setTimeout(() => {
        setCopied(false)
      }, 2000)
    }
  }

  useEffect(() => {
    copyToClipboard()
  }, [content])

  return (
    <Tooltip
      arrow
      open={copied}
      title={t('general.copied')}
      color="success"
      placement="top"
      componentsProps={{
        popper: {
          sx: {
            '& .MuiTooltip-tooltip': {
              backgroundColor: (theme) => theme.palette.success.light,
            },
            '& .MuiTooltip-arrow::before': {
              backgroundColor: (theme) => theme.palette.success.light,
            },
          },
        },
      }}
    >
      <ClipboardStyled
        aria-label={t<string>('components.clipboard.section', {
          data: content || t('general.noData'),
        })}
      >
        <>
          <Typography variant="body2">{content || t('general.noData')}</Typography>
          {!!content && (
            <Tooltip
              arrow
              title={t('general.copy')}
              color="default"
              placement="top-start"
            >
              <IconButton
                size="small"
                color="inherit"
                onClick={copyToClipboard}
                aria-label={t<string>('components.clipboard.copyButton')}
              >
                <ContentCopyIcon
                  fontSize="inherit"
                  aria-label={t('icons.ariaLabels.copy')}
                />
              </IconButton>
            </Tooltip>
          )}
        </>
      </ClipboardStyled>
    </Tooltip>
  )
}

export default memo(Clipboard)
