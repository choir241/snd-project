import Cart from "../../components/Cart/Cart";
import "./Appointment.css";
import Calendar from "../../components/Appointments/Calendar";
import CalendarToggleButton from "../../components/Appointments/CalendarToggleButton";
import Availabilty from "../../components/Appointments/Availability";
import AvailabilityHero from "../../components/Appointments/AvailabilityHero";
import PackageHeader from "../../components/Package/PackageHeader";
import Footer from "../../components/Footer";
import { useState } from "react";
import HiddenCalendar from "../../components/Appointments/HiddenCalendar";

export default function Appointments() {
  const [toggleCalendarView, setToggleCalendarView] = useState(false);

  return (
    <div className="bg-white" id="root">
      <div className="mb-0 flex w-screen max-h-screen-svh min-h-screen-svh h-full overflow-hidden relative">
        <div className="flex flex-col flex-grow overflow-y-auto">
          <PackageHeader />
          <div className="flex justify-center flex-grow w-full max-w-lg mx-auto">
            <div
              className="flex w-full justify-center"
              data-testid="availability-page"
            >
              <section
                aria-label="Main content"
                className="transition-opacity delay-150 duration-500 ease-in-out opacity-100 flex flex-col w-full px-4 md-lg:max-w-main-content "
              >
                {toggleCalendarView ? <HiddenCalendar /> : <Calendar />}

                <CalendarToggleButton
                  toggleCalendarView={toggleCalendarView}
                  setToggleCalendarView={setToggleCalendarView}
                />

                <AvailabilityHero />

                <Availabilty />
              </section>

              <Cart />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
