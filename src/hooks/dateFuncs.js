import { abbrMonths } from "../static/dateObj";

export function getAbbrMonth(selectedDate) {
  return abbrMonths[getMonth(selectedDate)];
}

export function getMonth(selectedDate, isIndex = true) {
  if (isIndex) {
    return new Date(selectedDate).getMonth();
  } else {
    return new Date(selectedDate).getMonth() + 1;
  }
}

export function getFullYear(selectedDate) {
  return new Date(selectedDate).getFullYear();
}

export function getDate(selectedDate) {
  return new Date(selectedDate).getDate();
}

export function formatDate(date) {
  return date.toString().padStart(2, 0);
}

export function toDateISOString(date) {
  return new Date(date + "Z").toISOString();
}

export function getHours(date) {
  return new Date(date).getHours();
}

export function getMinutes(date) {
  return new Date(date).getMinutes();
}

export function getTimeZone(date) {
  return new Date(date)
    .toLocaleString("en-US", {
      timeZoneName: "short",
    })
    .split(" ")
    .at(-1);
}

export function getDay(date) {
  return new Date(date).getDay();
}
