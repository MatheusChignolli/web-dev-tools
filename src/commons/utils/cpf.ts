import { NumberUtils } from '.'

const cpfRegex = /([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/

const generate = (formatted?: boolean) => {
  const n = 9
  const n1 = NumberUtils.randomNumber(n)
  const n2 = NumberUtils.randomNumber(n)
  const n3 = NumberUtils.randomNumber(n)
  const n4 = NumberUtils.randomNumber(n)
  const n5 = NumberUtils.randomNumber(n)
  const n6 = NumberUtils.randomNumber(n)
  const n7 = NumberUtils.randomNumber(n)
  const n8 = NumberUtils.randomNumber(n)
  const n9 = NumberUtils.randomNumber(n)

  let d1 =
    n9 * 2 + n8 * 3 + n7 * 4 + n6 * 5 + n5 * 6 + n4 * 7 + n3 * 8 + n2 * 9 + n1 * 10

  d1 = 11 - (d1 % 11)

  if (d1 >= 10) d1 = 0

  var d2 =
    d1 * 2 +
    n9 * 3 +
    n8 * 4 +
    n7 * 5 +
    n6 * 6 +
    n5 * 7 +
    n4 * 8 +
    n3 * 9 +
    n2 * 10 +
    n1 * 11

  d2 = 11 - (d2 % 11)

  if (d2 >= 10) d2 = 0

  return formatted
    ? `${n1}${n2}${n3}.${n4}${n5}${n6}.${n7}${n8}${n9}-${d1}${d2}`
    : `${n1}${n2}${n3}${n4}${n5}${n6}${n7}${n8}${n9}${d1}${d2}`
}

export default {
  cpfRegex,
  generate,
}
