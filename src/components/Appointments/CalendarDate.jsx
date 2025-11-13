export default function CalendarDate({ dateName, date }) {
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
    <button
      aria-pressed="false"
      data-testid={`date-${date}`}
      disabled=""
      rank="secondary"
      size="small"
      className="h-16 xs:w-12 flex bg-transparent market-button"
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
        <div className="text-core-text-20 font-normal line-through">
          &nbsp;{date}&nbsp;
        </div>
      </div>
    </button>
  );
}
