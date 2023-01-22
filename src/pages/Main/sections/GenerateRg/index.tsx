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
import { rgUtils } from '~utils'
import { useKeyPress } from '~hooks'

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
                  aria-label={t<string>('rg.ariaLabels.withMaskCheckbox')}
                />
              }
              label={t<string>('general.withMask')}
            />
          </FormGroup>
          <Tooltip title={t<string>('rg.generate')} arrow placement="top-start">
            <Button
              color="primary"
              variant="contained"
              onClick={generateRg}
              aria-label={t<string>('rg.ariaLabels.generateButton')}
            >
              {t('general.generate')}
            </Button>
          </Tooltip>
        </Grid>
        <Grid item xs={12}>
          <Clipboard content={rg} />
        </Grid>
      </Grid>
    </Card>
  )
}

export default GenerateRg
