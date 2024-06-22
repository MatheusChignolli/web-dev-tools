import { memo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Clipboard, Card, KeysCombo, DocumentBatchDialog } from '~components'
import { useKeyPress } from '~hooks'
import { Box, Button, Stack } from '@mui/material'
import { GenerateDocumentProps } from './interfaces'

const GenerateDocument = ({ document, generate, keys }: GenerateDocumentProps) => {
  const { t } = useTranslation()
  const [documentData, setDocumentData] = useState<string>()
  const documentKey = keys[0].toUpperCase()

  const generateDocument = (hasMask?: boolean) => {
    setDocumentData(generate(hasMask))
  }

  useKeyPress(keys, (event: any) => {
    if (event.ctrlKey) {
      generateDocument(event.shiftKey)
    }
  })

  return (
    <Card title={t<string>(`${document}.document`)}>
      <Box
        sx={{
          top: 16,
          right: 16,
          position: 'absolute',
        }}
      >
        <DocumentBatchDialog document={document} generate={generate} />
      </Box>
      <Stack spacing={1}>
        <Stack flexDirection="row" alignItems="center" gap={0.5}>
          <Button
            size="medium"
            color="primary"
            variant="outlined"
            onClick={() => generateDocument()}
            startIcon={<ArrowForwardIcon />}
            aria-label={t<string>(`${document}.ariaLabels.generateButton`)}
          >
            {t('components.generateDocument.generate')} {t(`${document}.document`)}
          </Button>
          <KeysCombo keys={['Ctrl', documentKey]} />
        </Stack>
        <Stack flexDirection="row" alignItems="center" gap={0.5}>
          <Button
            size="medium"
            color="primary"
            variant="outlined"
            onClick={() => generateDocument(true)}
            startIcon={<ArrowForwardIcon />}
            aria-label={t<string>(`${document}.ariaLabels.generateWithMaskButton`)}
          >
            {t('components.generateDocument.generate')}{' '}
            {t(`${document}.documentWithMask`)}
          </Button>
          <KeysCombo keys={['Shift', 'Ctrl', documentKey]} />
        </Stack>
        <Clipboard content={documentData} />
      </Stack>
    </Card>
  )
}

export default memo(GenerateDocument)
