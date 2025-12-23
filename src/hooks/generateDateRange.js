export function generateDateRange({ startDate, endTime }) {
  let endDate;
  const date = new Date();

  let currHrs = date.getHours();
  let currMin = date.getMinutes();
  const currSecs = date.getSeconds();

  const currMonth = date.getMonth() + 1;
  const currDate = date.getDate();
  const currYear = date.getFullYear();

  if (
    (startDate === `${currYear},${currMonth},${currDate}` &&
      currHrs < endTime) ||
    startDate !== `${currYear},${currMonth},${currDate}`
  ) {
    const newYear = new Date(startDate).getFullYear();
    const newMonth = new Date(startDate).getMonth() + 1;
    const newDate = new Date(startDate).getDate();

    currHrs = endTime;

    endDate = `${newYear}-${newMonth}-${newDate}T${currHrs
      .toString()
      .padStart(2, 0)}:${currMin.toString().padStart(2, 0)}:${currSecs
      .toString()
      .padStart(2, 0)}`;
  }

  return endDate;
}
