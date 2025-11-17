import CalendarDate from "./CalendarDate";
import CalendarArrowButtons from "./CalendarArrowButtons";
import CalendarWeek from "./CalendarWeek";
import { useState } from "react";

export default function Calendar() {

  const currentWeek = [
    { dateName: "Sa", date: 16 },
    { dateName: "Su", date: 17 },
    { dateName: "Mo", date: 18 },
    { dateName: "Tu", date: 19 },
    { dateName: "We", date: 20 },
    { dateName: "Th", date: 21 },
    { dateName: "Fr", date: 22 },
  ];

  const futureWeek = [
    { dateName: "Sa", date: 22 },
    { dateName: "Su", date: 23 },
    { dateName: "Mo", date: 24 },
    { dateName: "Tu", date: 25 },
    { dateName: "We", date: 26 },
    { dateName: "Th", date: 27 },
    { dateName: "Fr", date: 28 },
  ];

    const pastWeek = [
    { dateName: "Sa", date: 29 },
    { dateName: "Su", date: 30 },
    { dateName: "Mo", date: 1 },
    { dateName: "Tu", date: 2 },
    { dateName: "We", date: 3 },
    { dateName: "Th", date: 4 },
    { dateName: "Fr", date: 5 },
  ];

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

  const [currentPage, setCurrentPage] = useState(1);
  const [selected, setSelected] = useState("");
  
  const currentDate = new Date();

  return (
    <div className="calendar relative ">
      <div
        data-testid="weekview-date-picker"
        className="flex flex-col mb-4"
        id="week-view"
      >
        <div className="flex mb-4 items-center">
          <h2 className="flex-grow">
            {months[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>

          <CalendarArrowButtons currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </div>

        <div className="flex items-center">
          <div className="sm:px-2.5 w-0 flex flex-grow overflow-hidden">
            <div className="flex w-full my-2">
              {currentPage === 1 ? <CalendarWeek 
              selected={selected}
              setSelected={setSelected}
              calendarWeek={currentWeek} /> : ""}

              {currentPage === 2 ? <CalendarWeek 
              selected={selected}
              setSelected={setSelected}
              calendarWeek={futureWeek} /> : ""}

              {currentPage === 3 ? <CalendarWeek 
              selected={selected}
              setSelected={setSelected}
              calendarWeek={pastWeek} /> : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function hiddenCalendar() {
  return (
    <div className="calendar-hidden relative hidden">
      <market-date-picker
        data-testid="monthview-date-picker"
        disable-view-toggle=""
        id="month-view"
        displayed-date="2025-11-13T00:00:00.000-05:00"
        selected-start-date="2025-11-13T00:00:00.000-05:00"
        className="market-date-picker"
        mobile-menu-position="top"
        with-inputs=""
        hydrated=""
      >
        <template shadowrootmode="open">
          <section className="calendar">
            <header>
              <nav>
                <market-button
                  className="left-nav market-button"
                  aria-label="Previous month"
                  icon-only=""
                  rank="secondary"
                  size="small"
                  type="button"
                  variant="regular"
                  hydrated=""
                  disabled="true"
                >
                  <template shadowrootmode="open">
                    <button
                      className="inner-tag"
                      type="button"
                      aria-label="Previous month"
                      disabled=""
                      tabIndex="-1"
                    >
                      <slot name="icon"></slot>
                      <span className="button-text" part="button-text">
                        <slot></slot>
                      </span>
                    </button>
                  </template>
                  <market-icon
                    slot="icon"
                    className="market-icon"
                    tintable=""
                    name="arrow-left"
                    hydrated=""
                    style={{
                      style: "--icon-width: 24px; --icon-height: 24px",
                    }}
                  >
                    <template shadowrootmode="open">
                      <slot></slot>
                    </template>
                    <svg
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      data-name="arrow-left"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path
                        d="M12.2074 5.20654L6.41445 10.9995H20.0004V12.9995H6.41445L12.2074 18.7925L10.7934 20.2065L3.29336 12.7065C2.90288 12.316 2.90285 11.683 3.29336 11.2925L10.7934 3.79248L12.2074 5.20654Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </market-icon>
                </market-button>
                <h2 id="date-picker-label-e6cc987b-e91c-4b6b-b527-6e2b07755cab">
                  Nov 2025
                </h2>
                <market-button
                  aria-label="Next month"
                  className="market-button"
                  icon-only=""
                  rank="secondary"
                  size="small"
                  type="button"
                  variant="regular"
                  hydrated=""
                >
                  <template shadowrootmode="open">
                    <button
                      className="inner-tag"
                      type="button"
                      aria-label="Next month"
                    >
                      <slot name="icon"></slot>
                      <span className="button-text" part="button-text">
                        <slot></slot>
                      </span>
                    </button>
                  </template>
                  <market-icon
                    slot="icon"
                    className="market-icon"
                    tintable=""
                    name="arrow-right"
                    hydrated=""
                    style={{
                      style: "--icon-width: 24px; --icon-height: 24px",
                    }}
                  >
                    <template shadowrootmode="open">
                      <slot></slot>
                    </template>
                    <svg
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      data-name="arrow-right"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path
                        d="M20.7075 11.2925C20.8949 11.4799 21.0004 11.7345 21.0005 11.9995C21.0005 12.2645 20.8948 12.519 20.7075 12.7065L13.2075 20.2065L11.7935 18.7925L17.5864 12.9995H4.00049V10.9995H17.5864L11.7935 5.20654L13.2075 3.79248L20.7075 11.2925Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </market-icon>
                </market-button>
              </nav>
            </header>
            <month-view
              role="grid"
              aria-labelledby="date-picker-label-e6cc987b-e91c-4b6b-b527-6e2b07755cab"
            >
              <market-date-picker-date
                className="weekday-header market-date-picker-date"
                tabIndex="-1"
                aria-disabled=""
                aria-pressed="false"
                disabled=""
                selection="none"
                day="Su"
                hydrated=""
              >
                <template shadowrootmode="open">
                  <div className="market-date-picker-date-inner-container">
                    Su
                  </div>
                </template>
              </market-date-picker-date>
              <market-date-picker-date
                className="weekday-header market-date-picker-date"
                tabIndex="-1"
                aria-disabled=""
                aria-pressed="false"
                disabled=""
                selection="none"
                day="Mo"
                hydrated=""
              >
                <template shadowrootmode="open">
                  <div className="market-date-picker-date-inner-container">
                    Mo
                  </div>
                </template>
              </market-date-picker-date>
              <market-date-picker-date
                className="weekday-header market-date-picker-date"
                tabIndex="-1"
                aria-disabled=""
                aria-pressed="false"
                disabled=""
                selection="none"
                day="Tu"
                hydrated=""
              >
                <template shadowrootmode="open">
                  <div className="market-date-picker-date-inner-container">
                    Tu
                  </div>
                </template>
              </market-date-picker-date>
              <market-date-picker-date
                className="weekday-header market-date-picker-date"
                tabIndex="-1"
                aria-disabled=""
                aria-pressed="false"
                disabled=""
                selection="none"
                day="We"
                hydrated=""
              >
                <template shadowrootmode="open">
                  <div className="market-date-picker-date-inner-container">
                    We
                  </div>
                </template>
              </market-date-picker-date>
              <market-date-picker-date
                className="weekday-header market-date-picker-date"
                tabIndex="-1"
                aria-disabled=""
                aria-pressed="false"
                disabled=""
                selection="none"
                day="Th"
                hydrated=""
              >
                <template shadowrootmode="open">
                  <div className="market-date-picker-date-inner-container">
                    Th
                  </div>
                </template>
              </market-date-picker-date>
              <market-date-picker-date
                className="weekday-header market-date-picker-date"
                tabIndex="-1"
                aria-disabled=""
                aria-pressed="false"
                disabled=""
                selection="none"
                day="Fr"
                hydrated=""
              >
                <template shadowrootmode="open">
                  <div className="market-date-picker-date-inner-container">
                    Fr
                  </div>
                </template>
              </market-date-picker-date>
              <market-date-picker-date
                className="weekday-header market-date-picker-date"
                tabIndex="-1"
                aria-disabled=""
                aria-pressed="false"
                disabled=""
                selection="none"
                day="Sa"
                hydrated=""
              >
                <template shadowrootmode="open">
                  <div className="market-date-picker-date-inner-container">
                    Sa
                  </div>
                </template>
              </market-date-picker-date>
              <market-date-picker-date
                className="market-date-picker-date"
                tabIndex="-1"
                aria-pressed="false"
                selection="none"
                type="day"
                hydrated=""
              >
                <template shadowrootmode="open">
                  <div className="market-date-picker-date-inner-container"></div>
                </template>
              </market-date-picker-date>
              <market-date-picker-date
                className="market-date-picker-date"
                tabIndex="-1"
                aria-pressed="false"
                selection="none"
                type="day"
                hydrated=""
              >
                <template shadowrootmode="open">
                  <div className="market-date-picker-date-inner-container"></div>
                </template>
              </market-date-picker-date>
              <market-date-picker-date
                className="market-date-picker-date"
                tabIndex="-1"
                aria-pressed="false"
                selection="none"
                type="day"
                hydrated=""
              >
                <template shadowrootmode="open">
                  <div className="market-date-picker-date-inner-container"></div>
                </template>
              </market-date-picker-date>
              <market-date-picker-date
                className="market-date-picker-date"
                tabIndex="-1"
                aria-pressed="false"
                selection="none"
                type="day"
                hydrated=""
              >
                <template shadowrootmode="open">
                  <div className="market-date-picker-date-inner-container"></div>
                </template>
              </market-date-picker-date>
              <market-date-picker-date
                className="market-date-picker-date"
                tabIndex="-1"
                aria-pressed="false"
                selection="none"
                type="day"
                hydrated=""
              >
                <template shadowrootmode="open">
                  <div className="market-date-picker-date-inner-container"></div>
                </template>
              </market-date-picker-date>
              <market-date-picker-date
                className="market-date-picker-date"
                tabIndex="-1"
                aria-pressed="false"
                selection="none"
                type="day"
                hydrated=""
              >
                <template shadowrootmode="open">
                  <div className="market-date-picker-date-inner-container"></div>
                </template>
              </market-date-picker-date>
              <market-date-picker-date
                className="market-date-picker-date strikethrough unavailable"
                tabIndex="-1"
                aria-disabled=""
                aria-pressed="false"
                disabled=""
                selection="none"
                day="1"
                type="day"
                hydrated=""
              >
                <template shadowrootmode="open">
                  <div className="market-date-picker-date-inner-container">
                    1
                  </div>
                </template>
              </market-date-picker-date>
              <market-date-picker-date
                className="market-date-picker-date strikethrough unavailable"
                tabIndex="-1"
                aria-disabled=""
                aria-pressed="false"
                disabled=""
                selection="none"
                day="2"
                type="day"
                hydrated=""
              >
                <template shadowrootmode="open">
                  <div className="market-date-picker-date-inner-container">
                    2
                  </div>
                </template>
              </market-date-picker-date>
              <market-date-picker-date
                className="market-date-picker-date strikethrough unavailable"
                tabIndex="-1"
                aria-disabled=""
                aria-pressed="false"
                disabled=""
                selection="none"
                day="3"
                type="day"
                hydrated=""
              >
                <template shadowrootmode="open">
                  <div className="market-date-picker-date-inner-container">
                    3
                  </div>
                </template>
              </market-date-picker-date>
              <market-date-picker-date
                className="market-date-picker-date strikethrough unavailable"
                tabIndex="-1"
                aria-disabled=""
                aria-pressed="false"
                disabled=""
                selection="none"
                day="4"
                type="day"
                hydrated=""
              >
                <template shadowrootmode="open">
                  <div className="market-date-picker-date-inner-container">
                    4
                  </div>
                </template>
              </market-date-picker-date>
              <market-date-picker-date
                className="market-date-picker-date strikethrough unavailable"
                tabIndex="-1"
                aria-disabled=""
                aria-pressed="false"
                disabled=""
                selection="none"
                day="5"
                type="day"
                hydrated=""
              >
                <template shadowrootmode="open">
                  <div className="market-date-picker-date-inner-container">
                    5
                  </div>
                </template>
              </market-date-picker-date>
              <market-date-picker-date
                className="market-date-picker-date strikethrough unavailable"
                tabIndex="-1"
                aria-disabled=""
                aria-pressed="false"
                disabled=""
                selection="none"
                day="6"
                type="day"
                hydrated=""
              >
                <template shadowrootmode="open">
                  <div className="market-date-picker-date-inner-container">
                    6
                  </div>
                </template>
              </market-date-picker-date>
              <market-date-picker-date
                className="market-date-picker-date strikethrough unavailable"
                tabIndex="-1"
                aria-disabled=""
                aria-pressed="false"
                disabled=""
                selection="none"
                day="7"
                type="day"
                hydrated=""
              >
                <template shadowrootmode="open">
                  <div className="market-date-picker-date-inner-container">
                    7
                  </div>
                </template>
              </market-date-picker-date>
              <market-date-picker-date
                className="market-date-picker-date strikethrough unavailable"
                tabIndex="-1"
                aria-disabled=""
                aria-pressed="false"
                disabled=""
                selection="none"
                day="8"
                type="day"
                hydrated=""
              >
                <template shadowrootmode="open">
                  <div className="market-date-picker-date-inner-container">
                    8
                  </div>
                </template>
              </market-date-picker-date>
              <market-date-picker-date
                className="market-date-picker-date strikethrough unavailable"
                tabIndex="-1"
                aria-disabled=""
                aria-pressed="false"
                disabled=""
                selection="none"
                day="9"
                type="day"
                hydrated=""
              >
                <template shadowrootmode="open">
                  <div className="market-date-picker-date-inner-container">
                    9
                  </div>
                </template>
              </market-date-picker-date>
              <market-date-picker-date
                className="market-date-picker-date strikethrough unavailable"
                tabIndex="-1"
                aria-disabled=""
                aria-pressed="false"
                disabled=""
                selection="none"
                day="10"
                type="day"
                hydrated=""
              >
                <template shadowrootmode="open">
                  <div className="market-date-picker-date-inner-container">
                    10
                  </div>
                </template>
              </market-date-picker-date>
              <market-date-picker-date
                className="market-date-picker-date strikethrough unavailable"
                tabIndex="-1"
                aria-disabled=""
                aria-pressed="false"
                disabled=""
                selection="none"
                day="11"
                type="day"
                hydrated=""
              >
                <template shadowrootmode="open">
                  <div className="market-date-picker-date-inner-container">
                    11
                  </div>
                </template>
              </market-date-picker-date>
              <market-date-picker-date
                className="market-date-picker-date strikethrough unavailable"
                tabIndex="-1"
                aria-disabled=""
                aria-pressed="false"
                disabled=""
                selection="none"
                day="12"
                type="day"
                hydrated=""
              >
                <template shadowrootmode="open">
                  <div className="market-date-picker-date-inner-container">
                    12
                  </div>
                </template>
              </market-date-picker-date>
              <market-date-picker-date
                className="market-date-picker-date unavailable"
                role="button"
                tabIndex="0"
                aria-pressed="true"
                selection="single"
                today="true"
                selected=""
                day="13"
                type="day"
                hydrated=""
              >
                <template shadowrootmode="open">
                  <div className="market-date-picker-date-inner-container">
                    13
                  </div>
                </template>
              </market-date-picker-date>
              <market-date-picker-date
                className="market-date-picker-date"
                role="button"
                tabIndex="0"
                aria-pressed="false"
                selection="none"
                day="14"
                type="day"
                hydrated=""
              >
                <template shadowrootmode="open">
                  <div className="market-date-picker-date-inner-container">
                    14
                  </div>
                </template>
              </market-date-picker-date>
              <market-date-picker-date
                className="market-date-picker-date"
                role="button"
                tabIndex="0"
                aria-pressed="false"
                selection="none"
                day="15"
                type="day"
                hydrated=""
              >
                <template shadowrootmode="open">
                  <div className="market-date-picker-date-inner-container">
                    15
                  </div>
                </template>
              </market-date-picker-date>
              <market-date-picker-date
                className="market-date-picker-date"
                role="button"
                tabIndex="0"
                aria-pressed="false"
                selection="none"
                day="16"
                type="day"
                hydrated=""
              >
                <template shadowrootmode="open">
                  <div className="market-date-picker-date-inner-container">
                    16
                  </div>
                </template>
              </market-date-picker-date>
              <market-date-picker-date
                className="market-date-picker-date"
                role="button"
                tabIndex="0"
                aria-pressed="false"
                selection="none"
                day="17"
                type="day"
                hydrated=""
              >
                <template shadowrootmode="open">
                  <div className="market-date-picker-date-inner-container">
                    17
                  </div>
                </template>
              </market-date-picker-date>
              <market-date-picker-date
                className="market-date-picker-date"
                role="button"
                tabIndex="0"
                aria-pressed="false"
                selection="none"
                day="18"
                type="day"
                hydrated=""
              >
                <template shadowrootmode="open">
                  <div className="market-date-picker-date-inner-container">
                    18
                  </div>
                </template>
              </market-date-picker-date>
              <market-date-picker-date
                className="market-date-picker-date"
                role="button"
                tabIndex="0"
                aria-pressed="false"
                selection="none"
                day="19"
                type="day"
                hydrated=""
              >
                <template shadowrootmode="open">
                  <div className="market-date-picker-date-inner-container">
                    19
                  </div>
                </template>
              </market-date-picker-date>
              <market-date-picker-date
                className="market-date-picker-date"
                role="button"
                tabIndex="0"
                aria-pressed="false"
                selection="none"
                day="20"
                type="day"
                hydrated=""
              >
                <template shadowrootmode="open">
                  <div className="market-date-picker-date-inner-container">
                    20
                  </div>
                </template>
              </market-date-picker-date>
              <market-date-picker-date
                className="market-date-picker-date"
                role="button"
                tabIndex="0"
                aria-pressed="false"
                selection="none"
                day="21"
                type="day"
                hydrated=""
              >
                <template shadowrootmode="open">
                  <div className="market-date-picker-date-inner-container">
                    21
                  </div>
                </template>
              </market-date-picker-date>
              <market-date-picker-date
                className="market-date-picker-date"
                role="button"
                tabIndex="0"
                aria-pressed="false"
                selection="none"
                day="22"
                type="day"
                hydrated=""
              >
                <template shadowrootmode="open">
                  <div className="market-date-picker-date-inner-container">
                    22
                  </div>
                </template>
              </market-date-picker-date>
              <market-date-picker-date
                className="market-date-picker-date"
                role="button"
                tabIndex="0"
                aria-pressed="false"
                selection="none"
                day="23"
                type="day"
                hydrated=""
              >
                <template shadowrootmode="open">
                  <div className="market-date-picker-date-inner-container">
                    23
                  </div>
                </template>
              </market-date-picker-date>
              <market-date-picker-date
                className="market-date-picker-date"
                role="button"
                tabIndex="0"
                aria-pressed="false"
                selection="none"
                day="24"
                type="day"
                hydrated=""
              >
                <template shadowrootmode="open">
                  <div className="market-date-picker-date-inner-container">
                    24
                  </div>
                </template>
              </market-date-picker-date>
              <market-date-picker-date
                className="market-date-picker-date"
                role="button"
                tabIndex="0"
                aria-pressed="false"
                selection="none"
                day="25"
                type="day"
                hydrated=""
              >
                <template shadowrootmode="open">
                  <div className="market-date-picker-date-inner-container">
                    25
                  </div>
                </template>
              </market-date-picker-date>
              <market-date-picker-date
                className="market-date-picker-date"
                role="button"
                tabIndex="0"
                aria-pressed="false"
                selection="none"
                day="26"
                type="day"
                hydrated=""
              >
                <template shadowrootmode="open">
                  <div className="market-date-picker-date-inner-container">
                    26
                  </div>
                </template>
              </market-date-picker-date>
              <market-date-picker-date
                className="market-date-picker-date"
                role="button"
                tabIndex="0"
                aria-pressed="false"
                selection="none"
                day="27"
                type="day"
                hydrated=""
              >
                <template shadowrootmode="open">
                  <div className="market-date-picker-date-inner-container">
                    27
                  </div>
                </template>
              </market-date-picker-date>
              <market-date-picker-date
                className="market-date-picker-date"
                role="button"
                tabIndex="0"
                aria-pressed="false"
                selection="none"
                day="28"
                type="day"
                hydrated=""
              >
                <template shadowrootmode="open">
                  <div className="market-date-picker-date-inner-container">
                    28
                  </div>
                </template>
              </market-date-picker-date>
              <market-date-picker-date
                className="market-date-picker-date"
                role="button"
                tabIndex="0"
                aria-pressed="false"
                selection="none"
                day="29"
                type="day"
                hydrated=""
              >
                <template shadowrootmode="open">
                  <div className="market-date-picker-date-inner-container">
                    29
                  </div>
                </template>
              </market-date-picker-date>
              <market-date-picker-date
                className="market-date-picker-date"
                role="button"
                tabIndex="0"
                aria-pressed="false"
                selection="none"
                day="30"
                type="day"
                hydrated=""
              >
                <template shadowrootmode="open">
                  <div className="market-date-picker-date-inner-container">
                    30
                  </div>
                </template>
              </market-date-picker-date>
              <market-date-picker-date
                className="market-date-picker-date"
                tabIndex="-1"
                aria-pressed="false"
                selection="none"
                type="day"
                hydrated=""
              >
                <template shadowrootmode="open">
                  <div className="market-date-picker-date-inner-container"></div>
                </template>
              </market-date-picker-date>
              <market-date-picker-date
                className="market-date-picker-date"
                tabIndex="-1"
                aria-pressed="false"
                selection="none"
                type="day"
                hydrated=""
              >
                <template shadowrootmode="open">
                  <div className="market-date-picker-date-inner-container"></div>
                </template>
              </market-date-picker-date>
              <market-date-picker-date
                className="market-date-picker-date"
                tabIndex="-1"
                aria-pressed="false"
                selection="none"
                type="day"
                hydrated=""
              >
                <template shadowrootmode="open">
                  <div className="market-date-picker-date-inner-container"></div>
                </template>
              </market-date-picker-date>
              <market-date-picker-date
                className="market-date-picker-date"
                tabIndex="-1"
                aria-pressed="false"
                selection="none"
                type="day"
                hydrated=""
              >
                <template shadowrootmode="open">
                  <div className="market-date-picker-date-inner-container"></div>
                </template>
              </market-date-picker-date>
              <market-date-picker-date
                className="market-date-picker-date"
                tabIndex="-1"
                aria-pressed="false"
                selection="none"
                type="day"
                hydrated=""
              >
                <template shadowrootmode="open">
                  <div className="market-date-picker-date-inner-container"></div>
                </template>
              </market-date-picker-date>
              <market-date-picker-date
                className="market-date-picker-date"
                tabIndex="-1"
                aria-pressed="false"
                selection="none"
                type="day"
                hydrated=""
              >
                <template shadowrootmode="open">
                  <div className="market-date-picker-date-inner-container"></div>
                </template>
              </market-date-picker-date>
            </month-view>
          </section>
        </template>
      </market-date-picker>
    </div>
  );
}
