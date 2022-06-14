import { ChangeEvent, useState } from 'react'
import { useTranslation } from 'react-i18next'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow'
import {
  Checkbox,
  FormGroup,
  FormControlLabel,
  Clipboard,
  Tooltip,
  Card,
  Grid,
} from '~components'
import { cpfUtils } from '~utils'
import { useKeyPress } from '~hooks'
import { IconButtonStyled } from './styles'

const GenerateCpf = () => {
  const { t } = useTranslation()
  const [cpf, setCpf] = useState<string>()
  const [hasMask, setHasMask] = useState(false)

  const generateCpf = () => {
    setCpf(cpfUtils.generate(hasMask))
  }

  useKeyPress(['q', 'Q'], (event: any) => {
    if (event.ctrlKey) {
      generateCpf()
    }
  })

  const handleCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
    setHasMask(event.target.checked)
  }

  return (
    <Card title={t('cpf.generate')} keys={['Ctrl', 'Q']} fullHeight>
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
              label={t('cpf.withMask') as string}
            />
          </FormGroup>
        </Grid>
        <Grid item xs="auto">
          <Tooltip title={`${t('cpf.generate')}`} arrow placement="top-start">
            <IconButtonStyled
              color="primary"
              onClick={generateCpf}
              aria-label={t('cpf.ariaLabels.generateButton')}
            >
              <DoubleArrowIcon aria-label={t('icons.ariaLabels.doubleArrow')} />
            </IconButtonStyled>
          </Tooltip>
        </Grid>
        <Grid item xs="auto">
          <Clipboard content={cpf} />
        </Grid>
      </Grid>
    </Card>
  )
}

export default GenerateCpf
