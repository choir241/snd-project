export function generateCalendarDates({ dateRange }) {
  const currDate = new Date();
  const abbrDateNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const currHrs = currDate.getHours().toString().padStart(2, 0);
  const currMin = currDate.getMinutes().toString().padStart(2, 0);
  const currSecs = currDate.getSeconds().toString().padStart(2, 0);

  let newDate = currDate.getDate();
  let newMonth = currDate.getMonth() + 1;
  let newYear = currDate.getFullYear();

  const calendar = [];

  for (let i = 0; i < dateRange; i++) {
    switch (newMonth) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
        if (newDate > 31) {
          newDate -= 31;
          newMonth += 1;
        }
        break;
      case 12:
        if (newDate > 31) {
          newDate -= 31;
          newMonth = 1;
          newYear += 1;
        }
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        if (newDate > 30) {
          newDate -= 30;
        }
        break;
      case 2:
        if (newDate > 28) {
          newDate -= 28;
        }
        break;
    }

    const newEndDate = `${newYear.toString().padStart(2, 0)}-${newMonth
      .toString()
      .padStart(2, 0)}-${newDate
      .toString()
      .padStart(2, 0)}T${currHrs}:${currMin}:${currSecs}`;

    const endDate = new Date(newEndDate);

    calendar.push({
      month: newMonth,
      year: newYear,
      date: newDate,
      dateName: abbrDateNames[endDate.getDay()],
    });

    newDate += 1;
  }

  return calendar;
}
