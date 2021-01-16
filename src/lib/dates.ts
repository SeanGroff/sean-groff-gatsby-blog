type Month = {
  [key: string]: string
}

const months: Month = {
  '1': 'January',
  '2': 'February',
  '3': 'March',
  '4': 'April',
  '5': 'May',
  '6': 'June',
  '7': 'July',
  '8': 'August',
  '9': 'September',
  '10': 'October',
  '11': 'November',
  '12': 'December',
}

const addLeadingZero = (dayOrMonth: number) => {
  return dayOrMonth < 10 ? `0${dayOrMonth}` : dayOrMonth.toString()
}

const getMonthNumber = (date: Date) => {
  return date.getMonth() + 1
}

const getDayNumber = (date: Date) => {
  return addLeadingZero(date.getDate())
}

const getFullYear = (date: Date) => {
  return date.getFullYear()
}

export const getMonthNameByIndex = (monthIndex: string) => {
  return months[monthIndex]
}

export const getLongDate = (dateString: string) => {
  const date = new Date(dateString)
  const monthNumber = getMonthNumber(date)
  const dayNumber = getDayNumber(date)
  const fullYear = getFullYear(date)
  const monthName = months[monthNumber]

  return `${monthName} ${dayNumber}, ${fullYear}`
}

export const formatDateMMDDYYYY = (dateString: string) => {
  const date = new Date(dateString)
  const month = addLeadingZero(date.getMonth() + 1)
  const day = addLeadingZero(date.getDate())
  const year = date.getFullYear()

  return `${month}-${day}-${year}`
}
