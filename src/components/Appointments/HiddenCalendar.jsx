import { Calendar } from "../ui/calendar";

export default function HiddenCalendar({
  date = new Date().getDate(),
  setDate,
}) {
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-lg border w-full"
    />
  );
}
