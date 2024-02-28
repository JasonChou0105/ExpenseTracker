import { useDispatch, useSelector } from "react-redux";
import Form from "./Form/Form";
import { StyleSheet, View } from "react-native";
import BackButton from "./Form/BackButton";
import { editExpanse } from "../../store/expanses";
import RemoveButton from "./Form/RemoveButton";

function EditExpanseForm({ id, setModalVisible }) {
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

  var params = { ...data };
  console.log(params);

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
    if (params.name && params.price > 0) {
      params.price = Math.round(params.price * 100) / 100
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
      <BackButton setModalVisible={setModalVisible}/>
      <RemoveButton id={id} name={data.name} setModelVisable={setModalVisible}/>
      <Form
        submitHandle={editExpanseHandle}
        setParams={setParams}
        resetParams={resetParams}
        title="Edit Expense"
        buttonTitle="Confirm Edit"
        setModalVisable={setModalVisible}
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
