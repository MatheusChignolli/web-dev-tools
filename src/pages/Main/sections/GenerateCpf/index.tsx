import { ChangeEvent, useState } from 'react'
import { useTranslation } from 'react-i18next'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow'
import {
  Checkbox,
  FormGroup,
  FormControlLabel,
  Clipboard,
  IconButton,
  Card,
  Grid,
} from '~components'
import { CpfUtils } from '~utils'

const GenerateCpf = () => {
  const { t } = useTranslation()
  const [cpf, setCpf] = useState<string>()
  const [hasMask, setHasMask] = useState(false)

  const generateCpf = () => {
    setCpf(CpfUtils.generateCpf(hasMask))
  }

  const handleCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
    setHasMask(event.target.checked)
  }

  return (
    <Card title={t('cpf.generate')}>
      <Grid container alignItems="center">
        <Grid item xs={12}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  onChange={handleCheckbox}
                  aria-label={t('cpf.ariaLabels.withMaskCheckbox')}
                />
              }
              label={t('cpf.withMask')}
            />
          </FormGroup>
        </Grid>
        <Grid item xs="auto">
          <IconButton
            color="primary"
            onClick={generateCpf}
            aria-label={t('cpf.ariaLabels.generateButton')}
          >
            <DoubleArrowIcon aria-label={t('icons.ariaLabels.doubleArrow')} />
          </IconButton>
        </Grid>
        <Grid item xs="auto">
          <Clipboard content={cpf} />
        </Grid>
      </Grid>
    </Card>
  )
}

export default GenerateCpf
