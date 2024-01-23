import { View, StyleSheet, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../../constants/Colors";

function TimeDisplay({ date, day }) {
  return (
    <View style={styles.dateContainer}>
      <View style={styles.dayContainer}>
        <AntDesign name="calendar" size={15} color="white" />
        <Text style={styles.dayText}> {day}</Text>
      </View>
      <Text style={styles.dateText}> {date}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  dayText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 18,
  },
  dateText: {
    fontSize: 13,
    color: "#ffffff",
    fontStyle: "italic",
  },
  dateContainer: {
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: Colors.highlight1,
    margin: 16,
    borderWidth: 1,
    borderColor: "#a1a1a1c1",
    shadowColor: "#a1a1a1c1",
    shadowRadius: 10,
    shadowOpacity: 0.5,
  },
  dayContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TimeDisplay;
