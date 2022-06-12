import { numberUtils } from '..'

const maxRandomNumber = 99

describe('numberUtils', () => {
  describe('randomNumber', () => {
    it(`should return random number between or equal to 0 and ${maxRandomNumber}`, () => {
      const randomNumber = numberUtils.randomNumber(maxRandomNumber)
      const condition = randomNumber >= 0 && randomNumber <= maxRandomNumber

      expect(condition).toBeTruthy()
    })
  })
})
