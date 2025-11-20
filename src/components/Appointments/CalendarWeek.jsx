import CalendarDate from "./CalendarDate";

export default function CalendarWeek({calendarWeek, selected, setSelected}) {

  const currentDate = new Date();
  
  function checkForWeek(){
    if(calendarWeek[calendarWeek.length-1].date < currentDate.getDate()){
      return "past-week"
    }else if(calendarWeek.find((week)=>week.date === currentDate.getDate())){
      return "present-week"
    }else{
      return "future-week"
    }
  }

  return (
    <div
      aria-hidden="true"
      data-testid={checkForWeek()}
      className="calendar-week flex justify-between sm:px-2.5 "
    >
      {calendarWeek.map((week) => {
        return (
          <CalendarDate
          selected={selected}
          setSelected={setSelected}
            key={week.dateName}
            dateName={week.dateName}
            date={week.date}
            month={week.month}
            year={week.year}
          />
        );
      })}
    </div>
  );
}
