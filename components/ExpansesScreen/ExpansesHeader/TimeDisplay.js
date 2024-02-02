import { View, StyleSheet, Text, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import getDateInfo from "../../../helperFunctions/getDateInfo";
import DateSelector from "../../DateSelector";
import { useDispatch } from "react-redux";

function TimeDisplay({ date, setDate, title }) {
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
      <Pressable
        onPress={submitHandle}
        style={[
          styles.dateContainer,
          title == "From" ? styles.borderRadiusLeft : styles.borderRadiusRight,
        ]}
      >
        <Text style={styles.titleText}>{title}: </Text>
        <View style={styles.dayContainer}>
          <AntDesign name="calendar" size={15} color="white" />
          <Text style={styles.mainText}> {`${month} ${day}`}</Text>
        </View>
        <Text style={styles.subText}> {`${dayOfWeek} ${year}`}</Text>
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
  mainText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 18,
  },
  titleText: {
    color: "#ffffff",
  },
  subText: {
    fontSize: 11,
    color: "#ffffff",
    fontStyle: "italic",
  },
  dateContainer: {
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    width: 150,
    margin: 4,
    borderWidth: 1,
    borderColor: "#ffffff",
  },
  borderRadiusLeft: {
    borderBottomLeftRadius: 25,
    borderTopLeftRadius: 25,
  },
  borderRadiusRight: {
    borderBottomRightRadius: 25,
    borderTopRightRadius: 25,
  },
  dayContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default TimeDisplay;
