import { generateCalendarDates } from "../../hooks/generateCalendarDates";
import { generateDateRange } from "../../hooks/generateDateRange";
import axios from "axios";
import { useEffect } from "react";
import TimeButton from "./TimeButton";
import { labels } from "../../static/labels";

export default function Availabilty({
  setSelectedDate,
  selectedDate,
  appointments,
  setAppointments,
}) {
  const cartItems = JSON.parse(sessionStorage.getItem("cart")) || [];

  useEffect(() => {
    async function getAppointments() {
      try {
        const endDate = generateDateRange({
          startDate: selectedDate,
          endTime: 13,
        });

        if (endDate) {
          const newStartDate = new Date(selectedDate).toISOString();
          const newEndDate = new Date(endDate).toISOString();

          const appts = await axios.post(
            `${import.meta.env.VITE_BACKEND_API_URL}/bookings`,
            {
              startAt: newStartDate,
              endAt: newEndDate,
              serviceVariationId: cartItems[0].packageOption.id,
            },
          );

          const apptTimes = appts.data.appts.map((appt) => {
            let hours = new Date(appt.startAt).getHours();
            const min = new Date(appt.startAt).getMinutes();
            let timeMeridiem = "AM";
            if (hours > 12) {
              hours -= 12;
              timeMeridiem = "PM";
            } else if (hours === 12) {
              timeMeridiem = "PM";
            }

            return { hrs: hours, min: min, timeMeridiem: timeMeridiem };
          });
          setAppointments(apptTimes);
        }
      } catch (err) {
        console.error(err);
      }
    }
    getAppointments();
  }, [selectedDate]);

  const noAvailDate = generateCalendarDates({ dateRange: 2 })[1];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const weekDays = {
    Mo: "Monday",
    Tu: "Tuesday",
    We: "Wednesday",
    Th: "Thursday",
    Fr: "Friday",
    Sa: "Saturday",
    Su: "Sunday",
  };

  return (
    <div
      className="flex flex-1 flex-col"
      data-testid="availability-segments"
      id="availability-segments"
    >
      <div className="mb-4">
        {!appointments.length ? (
          <div className="mb-4">
            {labels.appointments.noAvailability}
            {weekDays[noAvailDate.dateName]}, {months[noAvailDate.month - 1]}{" "}
            {noAvailDate.date}.
          </div>
        ) : (
          ""
        )}
        <div className="w-full">
          {appointments.map((appt, i) => {
            return (
              <TimeButton
                key={i}
                time={`${appt.hrs}:${appt.min.toString().padStart(2, 0)} ${
                  appt.timeMeridiem
                }`}
              />
            );
          })}

          {!appointments.length ? (
            <button
              onClick={() =>
                setSelectedDate(
                  `${noAvailDate.year},${noAvailDate.month},${noAvailDate.date}`,
                )
              }
              rank="primary"
              size="small"
              className="w-full market-button button"
              type="button"
              variant="regular"
              hydrated=""
            >
              {labels.appointments.nextAvail}
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="mb-4"></div>
    </div>
  );
}
