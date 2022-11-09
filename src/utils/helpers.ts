import { isDate, parse } from 'date-fns'
import { SERVER_FORMATS } from '@/enums/formats'

export function initMemoUniqID() {
  let id = 0

  return () => (id += 1)
}

export const getUniqID = initMemoUniqID()

export const getDateFromString = (
  value: string | Date,
  format = SERVER_FORMATS.DATE
): null | Date => {
  if (!value) {
    return null
  }

  return isDate(value)
    ? (value as Date)
    : parse(String(value), format, new Date())
}
