import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import { Clipboard } from '~components'
import { DocumentBatchDialogProps } from './interfaces'
import { useTranslation } from 'react-i18next'

const DocumentBatchDialog = ({ document, generate }: DocumentBatchDialogProps) => {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const [result, setResult] = useState<string>()

  const onClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Button
        variant="contained"
        onClick={() => setOpen(true)}
        aria-label={t<string>('components.documentBatchDialog.ariaLabels.action', {
          document,
        })}
      >
        {t('components.documentBatchDialog.action')}
      </Button>
      <Dialog
        onClose={onClose}
        open={open}
        aria-label={t<string>('components.documentBatchDialog.ariaLabels.form', {
          document,
        })}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault()
            const { quantity, hasMask } = Object.fromEntries(
              (new FormData(event.currentTarget) as any).entries()
            )
            setResult(
              Array.from({ length: quantity }, () => generate(hasMask)).join('\n')
            )
          },
        }}
      >
        <DialogContent>
          <Stack spacing={2}>
            <Typography variant="h5">{t(`${document}.generate`)}</Typography>
            <Typography textAlign="justify" variant="body2">
              {t(`${document}.generateInBatch`)}
            </Typography>
            <Stack gap={2} flexDirection="row">
              <TextField
                fullWidth
                required
                autoFocus
                id="quantity"
                name="quantity"
                type="number"
                margin="dense"
                label={t('components.documentBatchDialog.quantityInput')}
                variant="outlined"
                InputProps={{ inputProps: { min: 1, max: 100000, autoFocus: true } }}
                aria-label={t<string>(
                  'components.documentBatchDialog.ariaLabels.quantityInput'
                )}
              />
              <FormControlLabel
                control={<Checkbox id="hasMask" name="hasMask" />}
                label={t('components.documentBatchDialog.withMaskCheckbox')}
                sx={{ minWidth: '40%' }}
                aria-label={t<string>(
                  'components.documentBatchDialog.ariaLabels.withMaskCheckbox',
                  { document }
                )}
              />
            </Stack>
            <Clipboard content={result} />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button
            size="small"
            variant="text"
            onClick={onClose}
            aria-label={t<string>('components.documentBatchDialog.ariaLabels.close')}
          >
            {t('components.documentBatchDialog.close')}
          </Button>
          <Button
            color="info"
            size="large"
            type="submit"
            variant="contained"
            aria-label={t<string>(
              'components.documentBatchDialog.ariaLabels.generate',
              { document }
            )}
          >
            {t('components.documentBatchDialog.generate')}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default DocumentBatchDialog
