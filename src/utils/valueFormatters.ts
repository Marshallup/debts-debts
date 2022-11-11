import { replaceDotsByComma, replaceCommaByDots } from '@/utils/helpers'

export function getVisualNumVal(numVal: string | number | null) {
  const strNumVal = String(numVal)

  if (/\./.test(strNumVal)) {
    return replaceDotsByComma(strNumVal)
  }

  return numVal
}

export function getNumberOrNull(value: string | number | null): number | null {
  if (!value) {
    return null
  }

  const stringVal = String(value).replace(/\s+/g, '')
  const validFloatNumber = replaceCommaByDots(stringVal)
  const parseNumber = parseFloat(validFloatNumber)

  if (parseNumber === 0) {
    return null
  }

  console.log(parseNumber, 'parase')

  if (!isNaN(parseNumber)) {
    return parseNumber
  }

  return null
}
