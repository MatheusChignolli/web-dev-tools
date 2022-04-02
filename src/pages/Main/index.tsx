import { useState } from 'react'
import { Card, Container, Grid, Header, Footer } from '~components'
import i18n from '~i18n'
import { useTheme } from '~hooks'
import { CpfUtils } from '~utils'

const Main = () => {
  const theme = useTheme()
  const [cpf, setCpf] = useState<string>()

  const generateCpf = () => {
    setCpf(CpfUtils.generateCpf(true))
  }

  return (
    <>
      <Container>
        <Header />
        <Grid container gap={2} padding={`${theme.spacing(2)} 0px`}>
          <Grid item xs={4}>
            <Card title={i18n.t('cpf.generate')}>
              <button onClick={generateCpf}>Gerar CPF</button>
              <div>CPF: {cpf}</div>
            </Card>
          </Grid>
        </Grid>
        <Footer />
      </Container>
    </>
  )
}

export default Main
