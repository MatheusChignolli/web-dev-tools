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
import { cnpjUtils } from '~utils'
import { useKeyPress } from '~hooks'
import { IconButtonStyled } from './styles'

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
    <Card title={t('cnpj.generate')} keys={['Ctrl', 'W']} fullHeight>
      <Grid container alignItems="center">
        <Grid item xs={12}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  onChange={handleCheckbox}
                  aria-label={t('cnpj.ariaLabels.withMaskCheckbox')}
                />
              }
              label={t('cnpj.withMask')}
            />
          </FormGroup>
        </Grid>
        <Grid item xs="auto">
          <Tooltip title={`${t('cnpj.generate')}`} arrow placement="top-start">
            <IconButtonStyled
              color="primary"
              onClick={generateCnpj}
              aria-label={t('cnpj.ariaLabels.generateButton')}
            >
              <DoubleArrowIcon aria-label={t('icons.ariaLabels.doubleArrow')} />
            </IconButtonStyled>
          </Tooltip>
        </Grid>
        <Grid item xs="auto">
          <Clipboard content={cnpj} />
        </Grid>
      </Grid>
    </Card>
  )
}

export default GenerateCnpj
