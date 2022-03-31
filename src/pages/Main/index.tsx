import { useState } from 'react'
import { Container, Header, Footer } from '~components'
import { CpfUtils } from '~utils'

const Main = () => {
  const [cpf, setCpf] = useState<string>()

  const generateCpf = () => {
    setCpf(CpfUtils.generateCpf(true))
  }

  return (
    <>
      <Header />
      <Container>
        <section>
          <button onClick={generateCpf}>Gerar CPF</button>
          <div>CPF: {cpf}</div>
        </section>
        <Footer />
      </Container>
    </>
  )
}

export default Main
