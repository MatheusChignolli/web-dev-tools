import { rgUtils } from '..'

const testArray = Array.from(Array(25), (_, x) => x)

describe('rgUtils', () => {
  describe('generateRg', () => {
    it.each(testArray)('should generate a real rg - test %s', () => {
      expect(rgUtils.rgRegex.test(rgUtils.generate())).toBeTruthy()
    })

    it.each(testArray)('should generate a real formatted rg - test %s', () => {
      expect(rgUtils.rgRegex.test(rgUtils.generate(true))).toBeTruthy()
    })
  })
})
