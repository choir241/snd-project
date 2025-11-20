import CalendarDate from "./CalendarDate";
import CalendarArrowButtons from "./CalendarArrowButtons";
import CalendarWeek from "./CalendarWeek";
import { useState } from "react";

export default function Calendar() {
  const currentWeek = [
    { month: 11, year: 2025, dateName: "Sa", date: 16 },
    { month: 11, year: 2025, dateName: "Su", date: 17 },
    { month: 11, year: 2025, dateName: "Mo", date: 18 },
    { month: 11, year: 2025, dateName: "Tu", date: 19 },
    { month: 11, year: 2025, dateName: "We", date: 20 },
    { month: 11, year: 2025, dateName: "Th", date: 21 },
    { month: 11, year: 2025, dateName: "Fr", date: 22 },
  ];

  const futureWeek = [
    { month: 11, year: 2025, dateName: "Sa", date: 22 },
    { month: 11, year: 2025, dateName: "Su", date: 23 },
    { month: 11, year: 2025, dateName: "Mo", date: 24 },
    { month: 11, year: 2025, dateName: "Tu", date: 25 },
    { month: 11, year: 2025, dateName: "We", date: 26 },
    { month: 11, year: 2025, dateName: "Th", date: 27 },
    { month: 11, year: 2025, dateName: "Fr", date: 28 },
  ];

  const pastWeek = [
    { month: 11, year: 2025, dateName: "Sa", date: 29 },
    { month: 11, year: 2025, dateName: "Su", date: 30 },
    { month: 12, year: 2025, dateName: "Mo", date: 1 },
    { month: 12, year: 2025, dateName: "Tu", date: 2 },
    { month: 12, year: 2025, dateName: "We", date: 3 },
    { month: 12, year: 2025, dateName: "Th", date: 4 },
    { month: 12, year: 2025, dateName: "Fr", date: 5 },
  ];

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [selected, setSelected] = useState("");

  const currentDate = new Date();

  return (
    <div className="calendar relative ">
      <div
        data-testid="weekview-date-picker"
        className="flex flex-col mb-4"
        id="week-view"
      >
        <div className="flex mb-4 items-center">
          <h2 className="flex-grow">
            {months[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>

          <CalendarArrowButtons
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>

        <div className="flex items-center">
          <div className="sm:px-2.5 w-0 flex flex-grow overflow-hidden">
            <div className="flex w-full my-2">
              {currentPage === 1 ? (
                <CalendarWeek
                  selected={selected}
                  setSelected={setSelected}
                  calendarWeek={currentWeek}
                />
              ) : (
                ""
              )}

              {currentPage === 2 ? (
                <CalendarWeek
                  selected={selected}
                  setSelected={setSelected}
                  calendarWeek={futureWeek}
                />
              ) : (
                ""
              )}

              {currentPage === 3 ? (
                <CalendarWeek
                  selected={selected}
                  setSelected={setSelected}
                  calendarWeek={pastWeek}
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
