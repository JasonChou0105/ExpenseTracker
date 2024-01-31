import { View, StyleSheet, Text, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import getDateInfo from "../../../helperFunctions/getDateInfo";
import DateSelector from "../../DateSelector";
import { useDispatch } from "react-redux";

function TimeDisplay({ date, setDate }) {
  const [datePickerActive, setDatePickerActive] = useState();
  const dispatch = useDispatch();

  const { dayOfWeek, day, month, year } = getDateInfo(date);
  function onChangeDate({ type }, selectedDate) {
    if (type == "set") {
      const currentDate = selectedDate;

      if (Platform.OS == "android") {
        toggleDatePicker();
        dispatch(
          setDate({
            date: currentDate.toDateString(),
          })
        );
      }
    } else {
      toggleDatePicker();
    }
  }
  //date picker
  function toggleDatePicker() {
    setDatePickerActive(!datePickerActive);
  }
  function confirmIosDate() {
    setDate(date.toDateString());
    toggleDatePicker();
  }

  function submitHandle() {
    toggleDatePicker();
  }
  return (
    <View>
      <Pressable onPress={submitHandle} style={styles.dateContainer}>
        <View style={styles.dayContainer}>
          <AntDesign name="calendar" size={15} color="white" />
          <Text style={styles.dayText}> {dayOfWeek}</Text>
        </View>
        <Text style={styles.dateText}> {`${year}/${month}/${day}`}</Text>
      </Pressable>
      {datePickerActive && (
        <DateSelector
          onChange={onChangeDate}
          toggleDatePicker={toggleDatePicker}
          confirmIosDate={confirmIosDate}
          date={new Date(date)}
        />
      )}
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
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    margin: 16,
    borderWidth: 1,
    borderColor: "#a1a1a1c1",
    shadowColor: "#a1a1a1c1",
    shadowRadius: 10,
    shadowOpacity: 0.5,
    width: 150,
  },
  dayContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default TimeDisplay;
