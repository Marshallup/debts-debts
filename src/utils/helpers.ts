import { isDate, parse, isAfter, addDays, isBefore } from 'date-fns'
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

export function initDisabledDates(
  date: Date,
  compareDate: string,
  isFrom = true,
  dateToFormat = SERVER_FORMATS.DATE
) {
  if (compareDate) {
    const parseCompareDate = parse(compareDate, dateToFormat, new Date())

    if (isFrom) {
      return disabledDatesFrom(date, parseCompareDate)
    }

    return disabledDatesTo(date, parseCompareDate)
  }

  return false
}

export const disabledDatesFrom = (date: Date, dateTo: Date): boolean =>
  isAfter(date, addDays(dateTo, -1))

export const disabledDatesTo = (date: Date, dateFrom: Date): boolean =>
  isBefore(date, addDays(dateFrom, 1))

export const replaceDotsByComma = (value: string) => value.replaceAll('.', ',')
export const replaceCommaByDots = (value: string) => value.replaceAll(',', '.')
