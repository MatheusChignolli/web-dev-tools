import { ChangeEvent, useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Checkbox,
  FormGroup,
  FormControlLabel,
  Clipboard,
  Tooltip,
  Button,
  Card,
  Grid,
} from '~components'
import { cnpjUtils } from '~utils'
import { useKeyPress } from '~hooks'

const GenerateCnpj = () => {
  const { t } = useTranslation()
  const [cnpj, setCnpj] = useState<string>()
  const [hasMask, setHasMask] = useState(false)

  const generateCnpj = () => {
    setCnpj(cnpjUtils.generate(hasMask))
  }

  useKeyPress(['w', 'W'], (event: any) => {
    if (event.ctrlKey) {
      generateCnpj()
    }
  })

  const handleCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
    setHasMask(event.target.checked)
  }

  return (
    <Card title={t<string>('cnpj.generate')} keys={['Ctrl', 'W']} fullHeight>
      <Grid container alignItems="center">
        <Grid
          item
          xs={12}
          display="flex"
          justifyContent="space-between"
          margin="0 0 8px 0"
        >
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  onChange={handleCheckbox}
                  aria-label={t<string>('cnpj.ariaLabels.withMaskCheckbox')}
                />
              }
              label={t<string>('general.withMask')}
            />
          </FormGroup>
          <Tooltip title={`${t('cnpj.generate')}`} arrow placement="top-start">
            <Button
              color="primary"
              variant="contained"
              onClick={generateCnpj}
              aria-label={t<string>('cnpj.ariaLabels.generateButton')}
            >
              {t('general.generate')}
            </Button>
          </Tooltip>
        </Grid>
        <Grid item xs={12}>
          <Clipboard content={cnpj} />
        </Grid>
      </Grid>
    </Card>
  )
}

export default GenerateCnpj
