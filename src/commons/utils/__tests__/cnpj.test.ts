import { CnpjUtils } from '..'

describe('CnpjUtils', () => {
  describe('generateCnpj', () => {
    Array.from(Array(10).keys()).forEach((_, index) => {
      it(`should generate a real cnpj - test ${index}`, () => {
        const cpf = CnpjUtils.generateCnpj()

        expect(CnpjUtils.cnpjRegex.test(cpf)).toBeTruthy()
      })
    })

    Array.from(Array(10).keys()).forEach((_, index) => {
      it(`should generate a real formatted cnpj - test ${index}`, () => {
        const formattedCpf = CnpjUtils.generateCnpj(true)

        expect(CnpjUtils.cnpjRegex.test(formattedCpf)).toBeTruthy()
      })
    })
  })
})