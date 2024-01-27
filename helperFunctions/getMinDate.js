import getDateValue from "../helperFunctions/getDateValue";

export default function getMinDate(expanses) {
  var min = Number.MAX_SAFE_INTEGER;
  var ind = 0;

  for (let i = 0; i < expanses.length; i++) {
    let value = getDateValue(expanses[i].date);
    if (value < min) {
      value = min;
      ind = i;
    }
  }
  const minExpanse = expanses[ind].date
  return minExpanse;
}
