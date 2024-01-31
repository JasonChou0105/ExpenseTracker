import { View, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { addExpanse } from "../../store/expanses";
import BackButton from "../BackButton";
import Form from "./Form/Form";
import { useSelector } from "react-redux";

function AddExpanseForm() {
  const dispatch = useDispatch();
  const expanses = useSelector((state) => state.expanses.expanses);

  var params = {};

  function setParams(expanseName, expansePrice, date) {
    params = {
      id: expanses.length,
      name: expanseName ? expanseName : params.name,
      price: expansePrice ? expansePrice : params.price,
      date: date ? date.toDateString() : params.date,
    };
  }
  function resetParams() {
    params = {
      name: null,
      price: null,
      date: null,
    };
  }

  //adding expanse to redux state
  function addExpanseHandle() {
    console.log(params.id);
    if (params.name && params.price > 0) {
      dispatch(
        addExpanse({
          params: params,
        })
      );
      return true;
    }
    return false;
  }

  return (
    <View style={styles.rootContainer}>
      <BackButton />
      <Form
        submitHandle={addExpanseHandle}
        setParams={setParams}
        resetParams={resetParams}
        title="Enter Expense Details"
        buttonTitle="Add expense"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
  },
});

export default AddExpanseForm;
