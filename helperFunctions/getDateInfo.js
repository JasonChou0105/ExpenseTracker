export default function getDateInfo(date) {
  if (typeof date == "string") {
    date = new Date(date);
  }
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return {
    dayOfWeek: daysOfWeek[date.getDay()],
    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear(),
  };
}
