import { Calendar } from "../ui/calendar";
import { addMonths, startOfMonth, startOfDay } from "date-fns";

export default function HiddenCalendar({ selectedDate, setSelectedDate }) {
  return (
    <div className="calendar relative ">
      <div
        data-testid="weekview-date-picker"
        className="flex flex-col mb-4"
        id="week-view"
      >
        <div className="flex items-center">
          <div className="sm:px-2.5 w-0 flex flex-grow overflow-hidden">
            <div className="flex w-full my-2">
              <Calendar
                mode="single"
                startMonth={startOfMonth(new Date())}
                endMonth={startOfMonth(addMonths(new Date(), 2))}
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-lg border w-full"
                disabled={{ before: startOfDay(new Date()) }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
