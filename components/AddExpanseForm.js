import { View, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { addExpanse } from "../store/expanses";
import BackButton from "./Form/BackButton";
import Form from "./Form/Form";

function AddExpanseForm() {
  const dispatch = useDispatch();
  var params = {};

  function setParams(expanseName, expansePrice, date) {
    params = {
      id: 1,
      name: expanseName && expanseName,
      price: expansePrice && expansePrice,
      date: date && date.toISOString(),
    };
  }

  //adding expanse to redux state
  function addExpanseHandle() {
    if (expanseName && expansePrice > 0) {
      dispatch(
        addExpanse({
          params: params,
        })
      );
    }
  }

  return (
    <View style={styles.rootContainer}>
      <BackButton />
      <Form submitHandle={addExpanseHandle} setParams={setParams} />
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
