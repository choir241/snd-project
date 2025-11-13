import Cart from "../../components/Cart/Cart";
import "./Appointment.css";
import Calendar from "../../components/Appointments/Calendar";
import CalendarToggleButton from "../../components/Appointments/CalendarToggleButton";
import Availabilty from "../../components/Appointments/Availability";
import AvailabilityHero from "../../components/Appointments/AvailabilityHero";

export default function Appointments() {
  return (
    <>
      <div className="flex justify-center flex-grow w-full max-w-lg mx-auto">
        <div
          className="flex w-full justify-center"
          data-testid="availability-page"
        >
          <section
            aria-label="Main content"
            className="transition-opacity delay-150 duration-500 ease-in-out opacity-100 flex flex-col w-full px-4 md-lg:max-w-main-content "
          >
            <Calendar />

            <CalendarToggleButton />

            <AvailabilityHero />

            <Availabilty />
          </section>

          <Cart />
        </div>
      </div>
    </>
  );
}
