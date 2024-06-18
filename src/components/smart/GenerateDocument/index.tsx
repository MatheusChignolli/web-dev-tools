import { memo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Clipboard, Card, KeysCombo, DocumentBatchDialog } from '~components'
import { useKeyPress } from '~hooks'
import { Button, Stack, Tooltip } from '@mui/material'
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
    <Card title={t<string>(`${document}.generate`)}>
      <Stack spacing={1}>
        <Stack
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          gap={0.5}
        >
          <Tooltip title={t(`${document}.generate`)} arrow placement="right">
            <Button
              size="small"
              color="primary"
              variant="contained"
              onClick={() => generateDocument()}
              aria-label={t<string>(`${document}.ariaLabels.generateButton`)}
            >
              {t(`${document}.document`)}
            </Button>
          </Tooltip>
          <KeysCombo keys={['Ctrl', documentKey]} />
        </Stack>
        <Stack
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          gap={0.5}
        >
          <Tooltip title={t(`${document}.generateWithMask`)} arrow placement="right">
            <Button
              size="small"
              color="primary"
              variant="contained"
              onClick={() => generateDocument(true)}
              aria-label={t<string>(`${document}.ariaLabels.generateWithMaskButton`)}
            >
              {t(`${document}.documentWithMask`)}
            </Button>
          </Tooltip>
          <KeysCombo keys={['Shift', 'Ctrl', documentKey]} />
        </Stack>
        <Clipboard content={documentData} />
        <DocumentBatchDialog document={document} generate={generate} />
      </Stack>
    </Card>
  )
}

export default memo(GenerateDocument)
