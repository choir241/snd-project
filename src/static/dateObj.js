import { formatDate } from "../hooks/dateFuncs";

const currDate = new Date();
const formattedDate = `${currDate.getFullYear()},${
  formatDate(currDate.getMonth() + 1)
},${formatDate(currDate.getDate())}`;

const hrs = currDate.getHours();
const min = currDate.getMinutes();
const sec = currDate.getSeconds();

const month = currDate.getMonth() + 1;
const date = currDate.getDate();
const year = currDate.getFullYear();

const day = currDate.getDay();

const abbrToFullWeekNames = {
  Mo: "Monday",
  Tu: "Tuesday",
  We: "Wednesday",
  Th: "Thursday",
  Fr: "Friday",
  Sa: "Saturday",
  Su: "Sunday",
};

const abbrMonths = [
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

const weekNameList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const abbrWeekNameList = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export {
  abbrToFullWeekNames,
  months,
  currDate,
  weekNameList,
  abbrWeekNameList,
  formattedDate,
  abbrMonths,
  hrs,
  min,
  sec,
  month,
  date,
  year,
  day,
};
