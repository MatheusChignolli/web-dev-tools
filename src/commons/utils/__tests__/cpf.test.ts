import { cpfUtils } from '..'

const testArray = Array.from(Array(15), (_, x) => x)

describe('cpfUtils', () => {
  describe('generateCpf', () => {
    it.each(testArray)('should generate a real cpf - test %s', () => {
      expect(cpfUtils.cpfRegex.test(cpfUtils.generate())).toBeTruthy()
    })

    it.each(testArray)('should generate a real formatted cpf - test %s', () => {
      expect(cpfUtils.cpfRegex.test(cpfUtils.generate(true))).toBeTruthy()
    })
  })
})
