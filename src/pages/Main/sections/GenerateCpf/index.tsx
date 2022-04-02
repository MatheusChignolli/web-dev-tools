import { useState } from 'react'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow'
import { Clipboard, IconButton, Card, Grid } from '~components'
import i18n from '~i18n'
import { CpfUtils } from '~utils'

const GenerateCpf = () => {
  const [cpf, setCpf] = useState<string>()

  const generateCpf = () => {
    const generatedCpf = CpfUtils.generateCpf(true)

    setCpf(generatedCpf)
    navigator.clipboard.writeText(generatedCpf)
  }

  return (
    <Card title={i18n.t('cpf.generate')}>
      <Grid container alignItems="center">
        <Grid item xs="auto">
          <IconButton color="primary" onClick={generateCpf}>
            <DoubleArrowIcon aria-label={i18n.t('icons.ariaLabels.doubleArrow')} />
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
