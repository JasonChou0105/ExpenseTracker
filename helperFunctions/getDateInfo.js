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
  months = [
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
  return {
    dayOfWeek: daysOfWeek[date.getDay()],
    day: date.getDate(),
    month: months[date.getMonth()],
    year: date.getFullYear(),
  };
}
