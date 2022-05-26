import { RgUtils } from '..'

describe('RgUtils', () => {
  describe('generateRg', () => {
    Array.from(Array(10).keys()).forEach((_, index) => {
      it(`should generate a real rg - test ${index}`, () => {
        const rg = RgUtils.generate()

        expect(RgUtils.rgRegex.test(rg)).toBeTruthy()
      })
    })

    Array.from(Array(10).keys()).forEach((_, index) => {
      it(`should generate a real formatted rg - test ${index}`, () => {
        const formattedRg = RgUtils.generate(true)

        expect(RgUtils.rgRegex.test(formattedRg)).toBeTruthy()
      })
    })
  })
})
