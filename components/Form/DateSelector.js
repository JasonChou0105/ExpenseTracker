import { View, Text, Platform, Pressable } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

function DateSelector({ onChange, toggleDatePicker, confirmIosDate, date }) {
  return (
    <View>
      <DateTimePicker
        mode="date"
        display="spinner"
        value={date}
        onChange={onChange}
        maximumDate={new Date()}
      />
      {Platform.OS == "ios" && (
        <View>
          <Pressable onPress={toggleDatePicker}>
            <Text>cancel</Text>
          </Pressable>
          <Pressable onPress={confirmIosDate}>
            <Text>submit</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

export default DateSelector;
