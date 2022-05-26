import { CnpjUtils } from '..'

describe('CnpjUtils', () => {
  describe('generateCnpj', () => {
    Array.from(Array(15).keys()).forEach((_, index) => {
      it(`should generate a real cnpj - test ${index}`, () => {
        const cpf = CnpjUtils.generate()

        expect(CnpjUtils.cnpjRegex.test(cpf)).toBeTruthy()
      })
    })

    Array.from(Array(15).keys()).forEach((_, index) => {
      it(`should generate a real formatted cnpj - test ${index}`, () => {
        const formattedCpf = CnpjUtils.generate(true)

        expect(CnpjUtils.cnpjRegex.test(formattedCpf)).toBeTruthy()
      })
    })
  })
})
