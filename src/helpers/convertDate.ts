export const convertDate = (
  date: string,
  long?: boolean,
) => {
  const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'ноября', 'декабря']
  const dateObj = new Date(date)
  const day = dateObj.getDate()
  const month = months[dateObj.getMonth()]
  const year = dateObj.getFullYear()
  if (long) {
    return `${day} ${month} ${year}`
  } else {
    return `${day} ${month.slice(0, 3)} ${year}`
  }
}