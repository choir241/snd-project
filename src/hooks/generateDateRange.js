export function generateDateRange({ selectedDate }) {
  const currDate = new Date();

  const currHrs = currDate.getHours().toString().padStart(2, 0);
  const currMin = currDate.getMinutes().toString().padStart(2, 0);
  const currSecs = currDate.getSeconds().toString().padStart(2, 0);

  let newDate = currDate.getDate();
  let newMonth = currDate.getMonth() + 1;
  let newYear = currDate.getFullYear();

  const startDate = currDate.toISOString();

  const newEndDate = `${newYear}-${newMonth}-${newDate}T${currHrs}:${currMin}:${currSecs}`;

  const endDate = new Date(newEndDate).toISOString();

  return { startDate, endDate };
}
