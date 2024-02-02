import { View, StyleSheet, Text } from "react-native";
import TimeDisplay from "./TimeDisplay";
import { setEndDate, setStartDate } from "../../../store/date";

function TimeRange({startDate, endDate}) {

  return (
    <View style={styles.container}>
      <TimeDisplay date={startDate} setDate={setStartDate} title="From"/>
      <TimeDisplay date={endDate} setDate={setEndDate} title="To"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 16,
  },
  text: {
    color: "#ffffff",
    fontSize: 20,
  },
});

export default TimeRange;
