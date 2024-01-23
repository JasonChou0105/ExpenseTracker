import { View, StyleSheet, Text } from "react-native";
import TimeDisplay from "./TimeDisplay";
import getDateInfo from "../../../helperFunctions/getDateInfo";

function TimeRange({ startDate, endDate }) {
  
  const [ startDayOfWeek, startDay, startMonth, startYear ] = getDateInfo(startDate)
  const [ endDayOfWeek, endDay, endMonth, endYear ] = getDateInfo(endDate)
  return (
    <View style={styles.container}>
      <TimeDisplay day={startDayOfWeek} date={`${startYear}/${startMonth}/${startDay}`} />
      <Text style={styles.text}>- - - - - - </Text>
      <TimeDisplay day={endDayOfWeek} date={`${endYear}/${endMonth}/${endDay}`} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 16
  },
  text: {
    color: "#ffffff",
    fontSize: 20,
  },
});

export default TimeRange;
