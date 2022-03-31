import { NumberUtils } from '..'

const maxRandomNumber = 99

describe('NumberUtils', () => {
  describe('randomNumber', () => {
    it(`should return random number between or equal to 0 and ${maxRandomNumber}`, () => {
      const randomNumber = NumberUtils.randomNumber(maxRandomNumber)
      const condition = randomNumber >= 0 && randomNumber <= maxRandomNumber

      expect(condition).toBeTruthy()
    })
  })
})
