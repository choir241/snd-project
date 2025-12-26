import { generateCalendarDates } from "../../hooks/generateCalendarDates";
import { generateDateRange } from "../../hooks/generateDateRange";
import axios from "axios";
import { useEffect } from "react";
import { labels } from "../../static/labels";
import AptBtnsContainer from "./AptBtnsContainer";
import TimeButton from "./TimeButton";
import { useNavigate } from "react-router";

export default function Availabilty({
  setSelectedDate,
  selectedDate,
  appointments,
  setAppointments,
}) {
  const navigate = useNavigate();

  const cartItems = sessionStorage.getItem("cart")
    ? JSON.parse(sessionStorage.getItem("cart"))
    : [];

  function addBookingToCart({ time }) {
    cartItems[0]["apptTime"] = time;
    cartItems[0]["apptDate"] = selectedDate;
    sessionStorage.setItem("cart", JSON.stringify(cartItems));
    navigate(labels.bookings.checkoutLink);
  }

  useEffect(() => {
    async function getAppointments() {
      try {
        const endDate = generateDateRange({
          startDate: selectedDate,
          endTime: 13,
        });

        if (endDate && cartItems.length) {
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

  const filterApts = {
    morning: {
      apts: [],
    },
    afternoon: {
      apts: [],
    },
    evening: {
      apts: [],
    },
  };

  appointments.forEach((appt) => {
    if (appt.hrs < 12 && appt.timeMeridiem === "AM") {
      filterApts.morning.apts.push(appt);
    } else if (appt.hrs < 6 && appt.timeMeridiem === "PM") {
      filterApts.afternoon.apts.push(appt);
    } else if (appt.timeMeridiem === "PM" && appt.hrs > 5 && appt.hrs < 12) {
      filterApts.evening.apts.push(appt);
    }
  });

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
        <div className="flex flex-col gap-4 mb-4">
          {appointments.length ? (
            <>
              <AptBtnsContainer
                availCatSeparator={labels.appointments.availMorning}
                TimeButtons={filterApts.morning.apts.map((appt, i) => {
                  return (
                    <TimeButton
                      addBookingToCart={addBookingToCart}
                      key={i}
                      time={`${appt.hrs}:${appt.min.toString().padStart(2, 0)} ${
                        appt.timeMeridiem
                      }`}
                    />
                  );
                })}
              />

              <AptBtnsContainer
                availCatSeparator={labels.appointments.availAfternoon}
                TimeButtons={filterApts.afternoon.apts.map((appt, i) => {
                  return (
                    <TimeButton
                      addBookingToCart={addBookingToCart}
                      key={i}
                      time={`${appt.hrs}:${appt.min.toString().padStart(2, 0)} ${
                        appt.timeMeridiem
                      }`}
                    />
                  );
                })}
              />

              <AptBtnsContainer
                availCatSeparator={labels.appointments.availEvening}
                TimeButtons={filterApts.evening.apts.map((appt, i) => {
                  return (
                    <TimeButton
                      addBookingToCart={addBookingToCart}
                      key={i}
                      time={`${appt.hrs}:${appt.min.toString().padStart(2, 0)} ${
                        appt.timeMeridiem
                      }`}
                    />
                  );
                })}
              />
            </>
          ) : (
            ""
          )}

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
