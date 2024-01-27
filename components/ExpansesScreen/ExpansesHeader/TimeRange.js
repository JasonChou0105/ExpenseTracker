import { View, StyleSheet, Text } from "react-native";
import TimeDisplay from "./TimeDisplay";
import getDateInfo from "../../../helperFunctions/getDateInfo";
import { useSelector } from "react-redux";
import { setEndDate, setStartDate } from "../../../store/date";

function TimeRange() {
  const dates = useSelector((state) => state.date.date);

  return (
    <View style={styles.container}>
      <TimeDisplay date={dates.startDate} setDate={setStartDate}/>
      <Text style={styles.text}>- - - - -</Text>
      <TimeDisplay date={dates.endDate} setDate={setEndDate}/>
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
