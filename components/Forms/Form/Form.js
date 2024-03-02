import { View, StyleSheet, Platform } from "react-native";
import AddExpanseTitle from "./AddExpanseTitle";
import FormInput from "./FormInput";
import SubmitButton from "./SubmitButton";

import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import DateSelector from "../../DateSelector";
import InvalidText from "./InvalidText";

function Form({
  setParams,
  submitHandle,
  resetParams,
  title,
  buttonTitle,
  setModalVisable,
  data,
}) {
  const navigation = useNavigation();

  const [expanseName, setExpanseName] = useState();
  const [expansePrice, setExpansePrice] = useState();
  const [date, setDate] = useState(new Date());

  const [expanseDate, setExpanseDate] = useState(date.toDateString());

  const [datePickerActive, setDatePickerActive] = useState(false);
  
  const [validName, setValidName] = useState(true);
  const [validPrice, setValidPrice] = useState(true);

  useEffect(() => {
    if (data) {
      setExpanseName(data.name);
      setExpansePrice(data.price);
      setExpanseDate(data.date);
    }
  }, [data]);

  setParams(null, null, date);
  console.log("eqwfe", expansePrice);

  function onNumberInputChange(text) {
    setExpansePrice(text);
    setParams(null, text, null);
    setValidPrice(true)
  }
  function onTextInputChange(text) {
    setExpanseName(text);
    setParams(text, null, null);
    setValidName(true);
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
    if (expanseName.trim() && expansePrice > 0 && !isNaN(expansePrice)) {
      submitHandle();
      setExpanseName("");
      setExpansePrice("");
      setExpanseDate(new Date().toDateString())
      resetParams();
      if(setModalVisable){
        setModalVisable(false);
      }else{
        navigation.goBack();
      }
    }
    if(!expanseName.trim()){
      setValidName(false);
    }
    if(expansePrice <= 0 || !expansePrice || isNaN(expansePrice)){
      setValidPrice(false);
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
      <AddExpanseTitle>{title}</AddExpanseTitle>
      <FormInput
        type="name"
        title="Expense Name"
        value={expanseName}
        onChangeHandle={onTextInputChange}
      />
      {!validName && (
        <InvalidText> Please fill out this box</InvalidText>
      )}
      <FormInput
        type="price"
        title="Expense Price"
        value={expansePrice&&expansePrice.toString()}
        onChangeHandle={onNumberInputChange}
      />
      {!validPrice && (
        <InvalidText> Price has to be a positive number</InvalidText>
      )}
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
      <SubmitButton submitHandle={submitHandleWithReset} title={buttonTitle} />
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
