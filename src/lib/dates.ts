export const addLeadingZero = (dayOrMonth: number) => {
  return dayOrMonth < 10 ? `0${dayOrMonth}` : dayOrMonth.toString()
}

export const formatDateMMDDYYYY = (dateString: string) => {
  const date = new Date(dateString)
  const month = addLeadingZero(date.getMonth() + 1)
  const day = addLeadingZero(date.getDate())
  const year = date.getFullYear()

  return `${month}-${day}-${year}`
}
