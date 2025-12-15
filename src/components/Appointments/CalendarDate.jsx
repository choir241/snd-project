export default function CalendarDate({
  dateName,
  date,
  selectedDate,
  setSelectedDate,
  month,
  year,
}) {
  const staticDateNames = {
    Mo: "Monday",
    Tu: "Tuesday",
    We: "Wednesday",
    Th: "Thursday",
    Fr: "Friday",
    Sa: "Saturday",
    Su: "Sunday",
  };

  const currentDate = new Date();

  function checkForWeek(textColor = "") {
    if (
      date < currentDate.getDate() &&
      month === currentDate.getMonth() + 1 &&
      year === currentDate.getFullYear()
    ) {
      return (
        <div
          className={`text-center font-normal line-through ${
            textColor ? textColor : "text-core-text-20"
          }`}
        >
          &nbsp;{date}&nbsp;
        </div>
      );
    } else {
      return (
        <div
          className={`text-center font-normal ${
            textColor ? textColor : "text-core-text-20 "
          }`}
        >
          {date}
        </div>
      );
    }
  }

  return (
    <>
      {new Date(selectedDate).getDate() === date ? (
        <button
          onClick={() => setSelectedDate(`${year},${month},${date}`)}
          aria-pressed="true"
          data-testid={`date-${date}-selected`}
          rank="secondary"
          size="small"
          className="selected h-16 flex bg-black market-button calendar-date"
          type="button"
          variant="regular"
          hydrated=""
        >
          <div className="flex flex-col items-center">
            <div
              className="text-white font-semibold"
              aria-label={staticDateNames[dateName]}
            >
              {dateName}
            </div>
            {checkForWeek("text-white")}
          </div>
        </button>
      ) : (
        <button
          onClick={() => setSelectedDate(`${year},${month},${date}`)}
          aria-pressed="false"
          data-testid={`date-${date}`}
          disabled=""
          rank="secondary"
          size="small"
          className="h-16 flex bg-transparent market-button calendar-date"
          type="button"
          variant="regular"
          hydrated=""
        >
          <div className="flex flex-col items-center">
            <div
              className="text-core-text-20 font-normal"
              aria-label={staticDateNames[dateName]}
            >
              {dateName}
            </div>
            {checkForWeek()}
          </div>
        </button>
      )}
    </>
  );
}
