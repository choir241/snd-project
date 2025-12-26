import { calculateItemsTotal } from "../../hooks/calculateItemsTotal";
import { FaRegCalendar } from "react-icons/fa";
import { labels } from "../../static/labels";
import { calculateCheckoutTimeRange } from "../../hooks/calculateCheckoutTimeRange";

export default function CheckoutCartHero({ cartItems }) {
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

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

  const date = new Date(cartItems[0].apptDate);

  return (
    <div className="market-row preload">
      <FaRegCalendar />
      <label slot="subtext">
        {weekDays[date.getDay()]}, {months[date.getMonth()]} {date.getDate()}
      </label>
      <label slot="subtext">
        <div>
          {cartItems[0].apptTime} -{" "}
          {calculateCheckoutTimeRange({
            startTime: cartItems[0].apptTime,
            timeAlloted: cartItems[0].packageTimeAlloted,
          })}
        </div>
        <div>
          {labels.checkout.estDue} ${calculateItemsTotal({ cartItems })}
        </div>
      </label>
    </div>
  );
}
