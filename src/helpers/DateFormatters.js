export function getCurrentDate(separator = '/') {
  const newDate = new Date();
  const date = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();

  return `${month < 10 ? `0${month}` : `${month}`}${separator}${
    date < 10 ? `0${date}` : `${date}`
  }${separator}${year}`;
}
