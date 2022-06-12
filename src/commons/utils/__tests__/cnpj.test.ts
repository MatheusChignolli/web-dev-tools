import { cnpjUtils } from '..'

describe('cnpjUtils', () => {
  describe('generateCnpj', () => {
    Array.from(Array(15).keys()).forEach((_, index) => {
      it(`should generate a real cnpj - test ${index}`, () => {
        const cpf = cnpjUtils.generate()

        expect(cnpjUtils.cnpjRegex.test(cpf)).toBeTruthy()
      })
    })

    Array.from(Array(15).keys()).forEach((_, index) => {
      it(`should generate a real formatted cnpj - test ${index}`, () => {
        const formattedCpf = cnpjUtils.generate(true)

        expect(cnpjUtils.cnpjRegex.test(formattedCpf)).toBeTruthy()
      })
    })
  })
})
