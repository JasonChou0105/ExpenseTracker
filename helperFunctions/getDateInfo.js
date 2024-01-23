export default function getDateInfo(date) {
  if (typeof date == "string") {
    var b = date.split(/\D+/);
    date = new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
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
  return [
    daysOfWeek[date.getDay()],
    date.getDate(),
    date.getMonth() + 1,
    date.getFullYear(),
  ];
}
