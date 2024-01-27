import getDateInfo from "./getDateInfo";

export default function getDateValue(date) {
  if (typeof date == "string") {
    date = new Date(date);
  }
  const { day, month, year } = getDateInfo(date);
  var leapYear = 0;
  const daysInMonth = [31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];

  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    leapYear = 1;
  }

  const total =
    parseInt(year) * 365 +
    leapYear +
    daysInMonth[parseInt(month - 1)] +
    parseInt(day);
    
  return total;
}
