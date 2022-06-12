import { numberUtils } from '.'

const rgRegex = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9X]{1})/

const generate = (formatted?: boolean) => {
  const n = 9
  const n1 = numberUtils.randomNumber(n)
  const n2 = numberUtils.randomNumber(n)
  const n3 = numberUtils.randomNumber(n)
  const n4 = numberUtils.randomNumber(n)
  const n5 = numberUtils.randomNumber(n)
  const n6 = numberUtils.randomNumber(n)
  const n7 = numberUtils.randomNumber(n)
  const n8 = numberUtils.randomNumber(n)

  let d1: string | number =
    n1 * 2 + n2 * 3 + n3 * 4 + n4 * 5 + n5 * 6 + n6 * 7 + n7 * 8 + n8 * 9

  d1 = 11 - (d1 % 11)

  if (d1 > 10) d1 = 0

  if (d1 === 10) d1 = 'X'

  return formatted
    ? `${n1}${n2}.${n3}${n4}${n5}.${n6}${n7}${n8}-${d1}`
    : `${n1}${n2}${n3}${n4}${n5}${n6}${n7}${n8}${d1}`
}

export default {
  rgRegex,
  generate,
}
