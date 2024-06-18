import { memo, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { IconButton, Tooltip, Typography } from '@mui/material'
import { ClipboardStyled } from './styles'
import { ClipboardProps } from './interfaces'

const Clipboard = ({ content }: ClipboardProps) => {
  const { t } = useTranslation()
  const [hover, setHover] = useState(false)
  const [copied, setCopied] = useState(false)

  const copyToClipboard = (isHover?: boolean) => {
    if (!!content) {
      navigator.clipboard.writeText(content)

      setCopied(true)

      if (!isHover) {
        setHover(true)
      }

      setTimeout(() => {
        setCopied(false)
        if (!isHover) {
          setHover(false)
        }
      }, 2000)
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
            arrow
            title={t(`general.${copied ? 'copied' : 'copy'}`)}
            placement="top-start"
            open={hover}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => {
              setHover(false)
              setCopied(false)
            }}
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
