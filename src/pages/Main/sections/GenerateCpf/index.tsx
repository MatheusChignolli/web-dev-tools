import { useState } from 'react'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow'
import { Clipboard, IconButton, Card, Grid } from '~components'
import { CpfUtils } from '~utils'
import { useTranslation } from 'react-i18next'

const GenerateCpf = () => {
  const { t } = useTranslation()
  const [cpf, setCpf] = useState<string>()

  const generateCpf = () => {
    setCpf(CpfUtils.generateCpf(true))
  }

  return (
    <Card title={t('cpf.generate')}>
      <Grid container alignItems="center">
        <Grid item xs="auto">
          <IconButton color="primary" onClick={generateCpf}>
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
