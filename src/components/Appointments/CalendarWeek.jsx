export default function CalendarWeek() {

  function checkForWeek(){}

  return (
    <div
      aria-hidden="true"
      data-testid="past-week"
      className="flex justify-between sm:px-2.5 "
      style={{ style: "flex: 0 0 100%" }}
    >
      {pastWeek.map((week) => {
        return (
          <CalendarDate
            key={week.dateName}
            dateName={week.dateName}
            date={week.dateName}
          />
        );
      })}
    </div>
  );
}
