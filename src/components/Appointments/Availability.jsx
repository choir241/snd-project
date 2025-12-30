import { generateCalendarDates } from "../../hooks/generateCalendarDates";
import { generateDateRange } from "../../hooks/generateDateRange";
import axios from "axios";
import { useEffect } from "react";
import { labels } from "../../static/labels";
import { months, abbrToFullWeekNames } from "../../static/dateObj";
import TimeButtonCategories from "./TimeButtonCategories";

export default function Availabilty({
  setSelectedDate,
  selectedDate,
  appointments,
  setAppointments,
}) {
  const cartItems = sessionStorage.getItem("cart")
    ? JSON.parse(sessionStorage.getItem("cart"))
    : [];

  useEffect(() => {
    async function getAppointments() {
      try {
        const endDate = generateDateRange({
          startDate: selectedDate,
          endTime: 13,
        });

        if (endDate && cartItems.length) {
          const newStartDate = new Date(selectedDate);
          const newEndDate = new Date(endDate);

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
            {abbrToFullWeekNames[noAvailDate.dateName]},{" "}
            {months[noAvailDate.month - 1]} {noAvailDate.date}.
          </div>
        ) : (
          ""
        )}
        <TimeButtonCategories
          appointments={appointments}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </div>
      <div className="mb-4"></div>
    </div>
  );
}
