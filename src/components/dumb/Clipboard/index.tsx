import { memo, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { IconButton, Tooltip, Typography } from '@mui/material'
import { ClipboardStyled } from './styles'
import { ClipboardProps } from './interfaces'

const Clipboard = ({ content }: ClipboardProps) => {
  const { t } = useTranslation()
  const [copied, setCopied] = useState(false)

  const copyToClipboard = (changeStatus?: boolean) => {
    if (!!content) {
      navigator.clipboard.writeText(content)

      if (changeStatus) {
        setCopied(true)
        setTimeout(() => {
          setCopied(false)
        }, 3000)
      }
    }
  }

  useEffect(() => {
    copyToClipboard()
  }, [content])

  return (
    <ClipboardStyled
      aria-label={t<string>('components.clipboard.section', {
        data: content || t('general.noData'),
      })}
    >
      <>
        <Typography variant="body2">{content || t('general.noData')}</Typography>
        {!!content && (
          <Tooltip
            title={t(`general.${copied ? 'copied' : 'copy'}`)}
            placement="top-start"
            arrow
            leaveDelay={copied ? 2000 : 0}
            color={copied ? 'success' : 'default'}
            componentsProps={
              copied
                ? {
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
                  }
                : undefined
            }
          >
            <IconButton
              size="small"
              color="inherit"
              onClick={() => copyToClipboard(true)}
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
  )
}

export default memo(Clipboard)
