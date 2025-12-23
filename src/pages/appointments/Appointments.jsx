import Cart from "../../components/Cart/Cart";
import "./Appointment.css";
import CalendarCarasoul from "../../components/Appointments/CalendarCarousel";
import CalendarToggleButton from "../../components/Appointments/CalendarToggleButton";
import Availabilty from "../../components/Appointments/Availability";
import AvailabilityHero from "../../components/Appointments/AvailabilityHero";
import PackageHeader from "../../components/Package/PackageHeader";
import Footer from "../../components/Footer";
import { useState } from "react";
import HiddenCalendar from "../../components/Appointments/HiddenCalendar";

export default function Appointments() {
  const date = new Date();
  const currDate = `${date.getFullYear()},${
    date.getMonth() + 1
  },${date.getDate()}`;

  const [toggleCalendarView, setToggleCalendarView] = useState(false);
  const [selectedDate, setSelectedDate] = useState(currDate);

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
  const [appointments, setAppointments] = useState([]);

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
                {toggleCalendarView ? (
                  ""
                ) : (
                  <h2 className="mb-2 overflow-wrap-anywhere">
                    {months[new Date(selectedDate).getMonth()]}{" "}
                    {new Date(selectedDate).getFullYear()}
                  </h2>
                )}

                {toggleCalendarView ? (
                  <HiddenCalendar
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                  />
                ) : (
                  <CalendarCarasoul
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                  />
                )}

                <CalendarToggleButton
                  toggleCalendarView={toggleCalendarView}
                  setToggleCalendarView={setToggleCalendarView}
                />

                <AvailabilityHero selectedDate={selectedDate} />

                <Availabilty
                  setSelectedDate={setSelectedDate}
                  selectedDate={selectedDate}
                  appointments={appointments}
                  setAppointments={setAppointments}
                />
              </section>
              <aside className="transition-opacity delay-150 duration-500 ease-in-out opacity-100 hidden md-lg:block md-lg:px-4 max-w-cart-sidebar min-w-cart-sidebar ">
                <div className="sticky top-2">
                  {/* Service Cart */}
                  <Cart />
                </div>
              </aside>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
