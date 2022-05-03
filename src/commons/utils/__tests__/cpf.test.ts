import { CpfUtils } from '..'

describe('CpfUtils', () => {
  describe('generateCpf', () => {
    Array.from(Array(10).keys()).forEach((_, index) => {
      it(`should generate a real cpf - test ${index}`, () => {
        const cpf = CpfUtils.generateCpf()

        expect(CpfUtils.cpfRegex.test(cpf)).toBeTruthy()
      })
    })

    Array.from(Array(10).keys()).forEach((_, index) => {
      it(`should generate a real formatted cpf - test ${index}`, () => {
        const formattedCpf = CpfUtils.generateCpf(true)

        expect(CpfUtils.cpfRegex.test(formattedCpf)).toBeTruthy()
      })
    })
  })
})
