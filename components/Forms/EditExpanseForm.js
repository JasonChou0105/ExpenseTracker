import { useDispatch, useSelector } from "react-redux";
import Form from "./Form/Form";
import { StyleSheet, View } from "react-native";
import BackButton from "../BackButton";
import { editExpanse } from "../../store/expanses";
import RemoveButton from "./Form/RemoveButton";

function EditExpanseForm({ id }) {
  const dispatch = useDispatch();

  const expanses = useSelector((state) => state.expanses.expanses);
  const expanse = expanses.find((item) => item.id === id);

  var data = {}
  if (expanse) {
    data = {
      name: expanse.name,
      price: expanse.price,
      date: expanse.date,
      id: expanse.id,
    };
  }
  console.log(data);

  var params = { ...data };

  function setParams(expanseName, expansePrice, date) {
    params = {
      id: data.id,
      name: expanseName !== null ? expanseName : params.name,
      price: expansePrice !== null ? expansePrice : params.price,
      date: date !== null ? date.toDateString() : params.date,
    };
  }
  function resetParams() {
    params = {
      id: data.id,
      name: data.name,
      price: data.price,
      date: data.date,
    };
  }

  //adding expanse to redux state
  function editExpanseHandle() {
    console.log(params.name);
    if (params.name && params.price > 0) {
      dispatch(
        editExpanse({
          id: id,
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
      <RemoveButton id={id} name={data.name}/>
      <Form
        submitHandle={editExpanseHandle}
        setParams={setParams}
        resetParams={resetParams}
        title="Edit Expense"
        buttonTitle="Confirm Edit"
        data={data}
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

export default EditExpanseForm;
