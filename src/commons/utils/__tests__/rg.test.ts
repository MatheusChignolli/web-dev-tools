import { rgUtils } from '..'

describe('rgUtils', () => {
  describe('generateRg', () => {
    Array.from(Array(15).keys()).forEach((_, index) => {
      it(`should generate a real rg - test ${index}`, () => {
        const rg = rgUtils.generate()

        expect(rgUtils.rgRegex.test(rg)).toBeTruthy()
      })
    })

    Array.from(Array(15).keys()).forEach((_, index) => {
      it(`should generate a real formatted rg - test ${index}`, () => {
        const formattedRg = rgUtils.generate(true)

        expect(rgUtils.rgRegex.test(formattedRg)).toBeTruthy()
      })
    })
  })
})
