import { replaceDotsByComma, replaceCommaByDots } from '@/utils/helpers'

export function getVisualNumVal(numVal: string | number | null) {
  const strNumVal = String(numVal)

  if (/\./.test(strNumVal)) {
    return replaceDotsByComma(strNumVal)
  }

  return numVal
}

export function getNumberOrNull(
  value: string | number | null,
  defaultVal: number
): number | null {
  if (!value) {
    return null
  }

  const stringVal = String(value)
  const validFloatNumber = replaceCommaByDots(stringVal)
  const parseNumber = parseFloat(validFloatNumber)

  if (!isNaN(parseNumber)) {
    return parseNumber
  }

  return defaultVal
}
