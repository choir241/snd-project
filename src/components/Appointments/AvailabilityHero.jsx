import { labels } from "../../static/labels";

export default function AvailabilityHero({ selectedDate }) {
  const currTimeZone = new Date(selectedDate)
    .toLocaleString("en-US", {
      timeZoneName: "short",
    })
    .split(" ")
    .at(-1);
  const date = new Date();
  const currDate = `${date.getFullYear()},${
    date.getMonth() + 1
  },${date.getDate()}`;
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
  const weekNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return (
    <>
      <div>
        <div className="text-core-text-20 text-sm w-full flex justify-center whitespace-pre-wrap">
          <span>
            {labels.appointments.timesShown}{" "}
            <span className="font-semibold">{currTimeZone}</span>.
          </span>
        </div>
      </div>
      <h3 className="my-6">
        {selectedDate === currDate ? (
          <span>
            Today, {weekNames[new Date(selectedDate).getDay()]},{" "}
            {months[new Date(selectedDate).getMonth()]}{" "}
            {new Date(selectedDate).getDate()},{" "}
            {new Date(selectedDate).getFullYear()}
          </span>
        ) : (
          <span>
            {weekNames[new Date(selectedDate).getDay()]},{" "}
            {months[new Date(selectedDate).getMonth()]}{" "}
            {new Date(selectedDate).getDate()},{" "}
            {new Date(selectedDate).getFullYear()}
          </span>
        )}
      </h3>
    </>
  );
}
