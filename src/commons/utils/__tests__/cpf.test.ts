import { CpfUtils } from '..'

describe('CpfUtils', () => {
  describe('generateCpf', () => {
    it(`should generate a real cpf`, () => {
      const cpf = CpfUtils.generateCpf()

      expect(CpfUtils.cpfRegex.test(cpf)).toBeTruthy()
    })

    it(`should generate a real formatted cpf`, () => {
      const formattedCpf = CpfUtils.generateCpf(true)

      expect(CpfUtils.cpfRegex.test(formattedCpf)).toBeTruthy()
    })
  })
})
