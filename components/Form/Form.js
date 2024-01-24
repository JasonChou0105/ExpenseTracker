import { View, StyleSheet, Platform } from "react-native";
import AddExpanseTitle from "./AddExpanseTitle";
import FormInput from "./FormInput";
import SubmitButton from "./SubmitButton";
import DateSelector from "./DateSelector";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

function Form({ setParams, submitHandle, resetParams, data }) {
  const navigation = useNavigation();

  const [expanseName, setExpanseName] = useState();
  const [expansePrice, setExpansePrice] = useState();
  const [date, setDate] = useState(new Date());

  const [expanseDate, setExpanseDate] = useState(date.toDateString());

  const [datePickerActive, setDatePickerActive] = useState(false);

  useEffect(() => {
    if (data) {
      setExpanseName(data.name);
      setExpansePrice(data.price);
      setExpanseDate(data.date);
    }
  }, []);

  setParams(null, null, date);

  function onNumberInputChange(text) {
    setExpansePrice(text);
    setParams(null, text, null);
  }
  function onTextInputChange(text) {
    setExpanseName(text);
    setParams(text, null, null);
  }
  function onChangeDate({ type }, selectedDate) {
    if (type == "set") {
      const currentDate = selectedDate;
      setDate(currentDate);
      if (Platform.OS == "android") {
        toggleDatePicker();
        setExpanseDate(currentDate.toDateString());
        setParams(null, null, currentDate);
      }
    } else {
      toggleDatePicker();
    }
  }
  function submitHandleWithReset() {
    if (submitHandle()) {
      navigation.goBack();
      setExpanseName("");
      setExpansePrice("");
      resetParams();
    }
  }
  //date picker
  function toggleDatePicker() {
    setDatePickerActive(!datePickerActive);
  }
  function confirmIosDate() {
    setExpanseDate(date.toDateString());
    setParams(null, null, currentDate);
    toggleDatePicker();
  }
  return (
    <View style={styles.formContainer}>
      <AddExpanseTitle>Enter Expense Details</AddExpanseTitle>
      <FormInput
        type="name"
        title="Expense Name"
        value={expanseName}
        onChangeHandle={onTextInputChange}
      />
      <FormInput
        type="price"
        title="Expense Price"
        value={expansePrice}
        onChangeHandle={onNumberInputChange}
      />
      <FormInput
        type="date"
        title="Date of Purchase"
        onChangeHandle={onChangeDate}
        value={expanseDate}
        toggleDatePicker={toggleDatePicker}
      />

      {datePickerActive && (
        <DateSelector
          onChange={onChangeDate}
          toggleDatePicker={toggleDatePicker}
          confirmIosDate={confirmIosDate}
          date={date}
        />
      )}
      <SubmitButton submitHandle={submitHandleWithReset} />
    </View>
  );
}
const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Form;
