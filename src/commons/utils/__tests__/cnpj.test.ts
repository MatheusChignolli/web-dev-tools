import { cnpjUtils } from '..'

const testArray = Array.from(Array(15), (_, x) => x)

describe('cnpjUtils', () => {
  describe('generateCnpj', () => {
    it.each(testArray)('should generate a real cnpj - test %s', () => {
      expect(cnpjUtils.cnpjRegex.test(cnpjUtils.generate())).toBeTruthy()
    })

    it.each(testArray)('should generate a real formatted cnpj - test %s', () => {
      expect(cnpjUtils.cnpjRegex.test(cnpjUtils.generate(true))).toBeTruthy()
    })
  })
})
