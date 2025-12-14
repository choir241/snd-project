export function generateDateRange({dateRange}) {
  const currDate = new Date();

  const currHrs = currDate.getHours().toString().padStart(2, 0);
  const currMin = currDate.getMinutes().toString().padStart(2, 0);
  const currSecs = currDate.getSeconds().toString().padStart(2, 0);

  let newDate = currDate.getDate() + dateRange;
  let newMonth = currDate.getMonth() + 1;
  let newYear = currDate.getFullYear();

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
    case 12:
      if (newDate > 31) {
        newDate -= 31;
        newMonth = 1;
        newYear += 1;
      }
    case 4:
    case 6:
    case 9:
    case 11:
      if (newDate > 30) {
        newDate -= 30;
      }
    case 2:
      if (newDate > 28) {
        newDate -= 28;
      }
  }

  const startDate = currDate.toISOString();

  const newEndDate = `${newYear}-${newMonth}-${newDate}T${currHrs}:${currMin}:${currSecs}`;

  const endDate = new Date(newEndDate).toISOString();

  return { startDate, endDate };
}
