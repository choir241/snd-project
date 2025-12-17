import CalendarArrowButtons from "./CalendarArrowButtons";
import CalendarWeek from "./CalendarWeek";
import { useState } from "react";
import { generateCalendarDates } from "../../hooks/generateCalendarDates";

export default function Calendar({ selectedDate, setSelectedDate }) {
  const [currentPage, setCurrentPage] = useState(1);
  const calendar = generateCalendarDates({ dateRange: 42 }).slice(
    currentPage,
    currentPage + 7,
  );

  // 9am start
  // 1pm end

  return (
    <div className="calendar relative ">
      <div
        data-testid="weekview-date-picker"
        className="flex flex-col mb-4"
        id="week-view"
      >
        <div className="flex mb-4 items-center">
          <h2 className="flex-grow">
            {/* {months[generateCalendarDates.getMonth()]} {currentDate.getFullYear()} */}
          </h2>

          <CalendarArrowButtons
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>

        <div className="flex items-center">
          <div className="sm:px-2.5 w-0 flex flex-grow overflow-hidden">
            <div className="flex w-full my-2">
              <CalendarWeek
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                calendarWeek={calendar}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
