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
import { rgUtils } from '~utils'
import { useKeyPress } from '~hooks'
import { IconButtonStyled } from './styles'

const GenerateRg = () => {
  const { t } = useTranslation()
  const [rg, setRg] = useState<string>()
  const [hasMask, setHasMask] = useState(false)

  const generateRg = () => {
    setRg(rgUtils.generate(hasMask))
  }

  useKeyPress(['e', 'E'], (event: any) => {
    if (event.ctrlKey) {
      generateRg()
    }
  })

  const handleCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
    setHasMask(event.target.checked)
  }

  return (
    <Card title={t<string>('rg.generate')} keys={['Ctrl', 'E']} fullHeight>
      <Grid container alignItems="center">
        <Grid item xs={12}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  onChange={handleCheckbox}
                  aria-label={t<string>('rg.ariaLabels.withMaskCheckbox')}
                />
              }
              label={t<string>('rg.withMask')}
            />
          </FormGroup>
        </Grid>
        <Grid item xs="auto">
          <Tooltip title={t<string>('rg.generate')} arrow placement="top-start">
            <IconButtonStyled
              color="primary"
              onClick={generateRg}
              aria-label={t<string>('rg.ariaLabels.generateButton')}
            >
              <DoubleArrowIcon aria-label={t('icons.ariaLabels.doubleArrow')} />
            </IconButtonStyled>
          </Tooltip>
        </Grid>
        <Grid item xs="auto">
          <Clipboard content={rg} />
        </Grid>
      </Grid>
    </Card>
  )
}

export default GenerateRg
