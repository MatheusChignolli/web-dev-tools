import { spacing } from '../utils'

describe('utils', () => {
  describe('when insert 1 param', () => {
    it.each([
      [, undefined],
      [undefined, undefined],
      [null, undefined],
      ['lorem ipsum', undefined],
      [0, '0px'],
      [10, '80px'],
      [10.5, '84px'],
    ])(
      'param: %s should returns %s',
      (param?: number | null | string, expected?: string) => {
        expect(spacing(param as number)).toBe(expected)
      }
    )
  })

  describe('when insert 2 params', () => {
    it.each([
      [[, undefined], undefined],
      [[undefined], undefined],
      [[undefined, undefined], undefined],
      [[5, undefined], '40px'],
      [[undefined, 5], undefined],
      [[null, null], undefined],
      [[6, null], '48px'],
      [[null, 6], undefined],
      [['lorem ipsum', 'lorem ipsum'], undefined],
      [[11, 'lorem ipsum'], '88px'],
      [['lorem ipsum', 11], undefined],
      [[0, 0], '0px 0px'],
      [[4, 0], '32px 0px'],
      [[0, 4], '0px 32px'],
      [[7, 10], '56px 80px'],
      [[7], '56px'],
      [[, 7], undefined],
    ])(
      'params: %s should return %s',
      (params?: (number | undefined | null | string)[], expected?: string) => {
        expect(spacing(params?.[0] as number, params?.[1] as number)).toBe(expected)
      }
    )
  })

  describe('when insert 3 params', () => {
    it.each([
      [[, , undefined], undefined],
      [[, undefined], undefined],
      [[undefined], undefined],
      [[undefined, undefined, undefined], undefined],
      [[5, undefined, undefined], '40px'],
      [[undefined, 5, undefined], undefined],
      [[undefined, undefined, 5], undefined],
      [[5, undefined, 5], undefined],
      [[undefined, 5, 5], undefined],
      [[5, 5, undefined], '40px 40px'],
      [[5, null, null], '40px'],
      [[null, 5, null], undefined],
      [[null, null, 5], undefined],
      [[, , 10], undefined],
      [[10, , 10], undefined],
      [[, 10, 10], undefined],
      [[10, 10], '80px 80px'],
      [[, 10], undefined],
      [[10], '80px'],
      [['lorem ipsum', 'lorem ipsum', 10], undefined],
      [[10, 'lorem ipsum', 10], undefined],
      [['lorem ipsum', 10, 10], undefined],
      [[10, 10], '80px 80px'],
      [['lorem ipsum', 10], undefined],
      [[8, 8, 8], '64px 64px 64px'],
    ])(
      'params: %s should return %s',
      (params?: (number | undefined | null | string)[], expected?: string) => {
        expect(
          spacing(
            params?.[0] as number,
            params?.[1] as number,
            params?.[2] as number
          )
        ).toBe(expected)
      }
    )
  })

  describe('when insert 4 params', () => {
    it.each([
      [[, , , undefined], undefined],
      [[, , undefined], undefined],
      [[, undefined], undefined],
      [[undefined], undefined],
      [[undefined, undefined, undefined, undefined], undefined],
      [[, , , 5], undefined],
      [[, , 5], undefined],
      [[, 5], undefined],
      [[5], '40px'],
      [[5, undefined, undefined, undefined], '40px'],
      [[undefined, 5, undefined, undefined], undefined],
      [[undefined, undefined, 5, undefined], undefined],
      [[undefined, undefined, undefined, 5], undefined],
      [[5, 'lorem ipsum', 'lorem ipsum', 'lorem ipsum'], '40px'],
      [['lorem ipsum', 5, 'lorem ipsum', 'lorem ipsum'], undefined],
      [['lorem ipsum', 'lorem ipsum', 5, 'lorem ipsum'], undefined],
      [['lorem ipsum', 'lorem ipsum', 'lorem ipsum', 5], undefined],
      [[0, null, null, 8], undefined],
      [[0, null, 0, null], undefined],
      [[0, null, null, null], '0px'],
      [[0, 8, null, null], '0px 64px'],
      [[0, 8, 0, null], '0px 64px 0px'],
      [[0, null, 0, 8], undefined],
      [[0, 8, null, 8], undefined],
      [[8, 8, 8, 8], '64px 64px 64px 64px'],
      [[0], '0px'],
      [[0, 8], '0px 64px'],
      [[0, 8, 0], '0px 64px 0px'],
      [[0, 8, 0, 8], '0px 64px 0px 64px'],
    ])(
      'params: %s should return %s',
      (params?: (number | undefined | null | string)[], expected?: string) => {
        expect(
          spacing(
            params?.[0] as number,
            params?.[1] as number,
            params?.[2] as number,
            params?.[3] as number
          )
        ).toBe(expected)
      }
    )
  })
})
