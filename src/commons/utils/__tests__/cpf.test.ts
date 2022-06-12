import { cpfUtils } from '..'

describe('cpfUtils', () => {
  describe('generateCpf', () => {
    Array.from(Array(15).keys()).forEach((_, index) => {
      it(`should generate a real cpf - test ${index}`, () => {
        const cpf = cpfUtils.generate()

        expect(cpfUtils.cpfRegex.test(cpf)).toBeTruthy()
      })
    })

    Array.from(Array(15).keys()).forEach((_, index) => {
      it(`should generate a real formatted cpf - test ${index}`, () => {
        const formattedCpf = cpfUtils.generate(true)

        expect(cpfUtils.cpfRegex.test(formattedCpf)).toBeTruthy()
      })
    })
  })
})
