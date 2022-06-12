import { format as dateFnsFormat } from 'date-fns'
import { dateUtils } from '..'

describe('dateUtils', () => {
  describe('format', () => {
    it.each([
      ['10/10/2010', undefined, '10/10/2010'],
      ['10/10/2010', 'yyyy', '2010'],
      ['10/10', 'yyyy', '2001'],
      [null, null, undefined],
      [undefined, undefined, dateFnsFormat(new Date(), 'dd/MM/yyyy')],
      [111, undefined, undefined],
      [111, 'yyyy', undefined],
    ])(
      'should call with date: %s, format: %s and return %s',
      (date, format, expectDate) => {
        expect(
          dateUtils.format(date as unknown as string, format as unknown as string)
        ).toBe(expectDate)
      }
    )
  })
})
