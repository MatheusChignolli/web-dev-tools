import { ChangeEvent, useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Checkbox,
  FormGroup,
  FormControlLabel,
  Clipboard,
  Tooltip,
  Card,
  Grid,
  Button,
} from '~components'
import { cpfUtils } from '~utils'
import { useKeyPress } from '~hooks'

const GenerateCpf = () => {
  const { t } = useTranslation()
  const [cpf, setCpf] = useState<string>()
  const [hasMask, setHasMask] = useState(false)

  const generateCpf = () => {
    setCpf(cpfUtils.generate(hasMask))
  }

  useKeyPress(['g', 'G'], (event: any) => {
    if (event.ctrlKey) {
      generateCpf()
    }
  })

  const handleCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
    setHasMask(event.target.checked)
  }

  return (
    <Card title={t<string>('cpf.generate')} keys={['Ctrl', 'G']} fullHeight>
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
                  aria-label={t<string>('cpf.ariaLabels.withMaskCheckbox')}
                />
              }
              label={t<string>('general.withMask')}
            />
          </FormGroup>
          <Tooltip title={`${t('cpf.generate')}`} arrow placement="top-start">
            <Button
              color="primary"
              variant="contained"
              onClick={generateCpf}
              aria-label={t<string>('cpf.ariaLabels.generateButton')}
            >
              {t('general.generate')}
            </Button>
          </Tooltip>
        </Grid>
        <Grid item xs={12}>
          <Clipboard content={cpf} />
        </Grid>
      </Grid>
    </Card>
  )
}

export default GenerateCpf
