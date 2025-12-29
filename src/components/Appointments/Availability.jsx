import { generateCalendarDates } from "../../hooks/generateCalendarDates";
import { generateDateRange } from "../../hooks/generateDateRange";
import axios from "axios";
import { useEffect } from "react";
import { labels } from "../../static/labels";
import AptBtnsContainer from "./AptBtnsContainer";
import TimeButton from "./TimeButton";
import { useNavigate } from "react-router";
import { months, abbrToFullWeekNames } from "../../static/dateObj";
import { setCart } from "../../static/cartItems";
import Button from "../Button";
import { toDateISOString } from "../../hooks/dateFuncs";
import TimeButtonCategories from "./TimeButtonCategories";

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
    setCart(cartItems);
    navigate(labels.links.checkoutLink);
  }

  useEffect(() => {
    async function getAppointments() {
      try {
        const endDate = generateDateRange({
          startDate: selectedDate,
          endTime: 13,
        });

        if (endDate && cartItems.length) {
          const newStartDate = new Date(selectedDate)
          const newEndDate = new Date(endDate);

          const appts = await axios.post(
            `${import.meta.env.VITE_BACKEND_API_URL}/bookings`,
            {
              startAt: newStartDate,
              endAt: newEndDate,
              serviceVariationId: cartItems[0].packageOption.id,
            }
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

  // const filterApts = {
  //   morning: {
  //     apts: [],
  //   },
  //   afternoon: {
  //     apts: [],
  //   },
  //   evening: {
  //     apts: [],
  //   },
  // };

  // appointments.forEach((appt) => {
  //   if (appt.hrs < 12 && appt.timeMeridiem === "AM") {
  //     filterApts.morning.apts.push(appt);
  //   } else if (appt.hrs < 6 && appt.timeMeridiem === "PM") {
  //     filterApts.afternoon.apts.push(appt);
  //   } else if (appt.timeMeridiem === "PM" && appt.hrs > 5 && appt.hrs < 12) {
  //     filterApts.evening.apts.push(appt);
  //   }
  // });

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
            {abbrToFullWeekNames[noAvailDate.dateName]}, {months[noAvailDate.month - 1]}{" "}
            {noAvailDate.date}.
          </div>
        ) : (
          ""
        )}
        <TimeButtonCategories
        appointments = {appointments}/>
        {/* <div className="flex flex-col gap-4 mb-4">
          {appointments.length ? (
            <>
              <AptBtnsContainer
                availCatSeparator={labels.appointments.availMorning}
                TimeButtons={filterApts.morning.apts.map((appt, i) => {
                  return (
                    <TimeButton
                      addBookingToCart={addBookingToCart}
                      key={i}
                      time={`${appt.hrs}:${appt.min
                        .toString()
                        .padStart(2, 0)} ${appt.timeMeridiem}`}
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
                      time={`${appt.hrs}:${appt.min
                        .toString()
                        .padStart(2, 0)} ${appt.timeMeridiem}`}
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
                      time={`${appt.hrs}:${appt.min
                        .toString()
                        .padStart(2, 0)} ${appt.timeMeridiem}`}
                    />
                  );
                })}
              />
            </>
          ) : (
            <Button
              onClick={() =>
                setSelectedDate(
                  `${noAvailDate.year},${noAvailDate.month},${noAvailDate.date}`
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
            </Button>
          )}
        </div> */}
      </div>
      <div className="mb-4"></div>
    </div>
  );
}
