export function checkForCalendarWeek({ calendarWeek }) {
  const currentDate = new Date();

  if (calendarWeek[calendarWeek.length - 1].date < currentDate.getDate()) {
    return "past-week";
  } else if (calendarWeek.find((week) => week.date === currentDate.getDate())) {
    return "present-week";
  } else {
    return "future-week";
  }
}
