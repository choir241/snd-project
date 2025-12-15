import CalendarDate from "./CalendarDate";
import { checkForCalendarWeek } from "../../hooks/checkForCalendarWeek";

export default function CalendarWeek({
  calendarWeek,
  selectedDate,
  setSelectedDate,
}) {
  return (
    <div
      aria-hidden="true"
      data-testid={checkForCalendarWeek({ calendarWeek })}
      className="calendar-week flex justify-between sm:px-2.5 "
    >
      {calendarWeek.map((week) => {
        return (
          <CalendarDate
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            key={week.dateName}
            dateName={week.dateName}
            date={week.date}
            month={week.month}
            year={week.year}
          />
        );
      })}
    </div>
  );
}
