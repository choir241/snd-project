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

  return (
    <>
      {selectedDate === `${year},${month},${date}` ? (
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
            <div className="text-center font-normal text-white">{date}</div>
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
            <div className="text-center font-normal">{date}</div>
          </div>
        </button>
      )}
    </>
  );
}
