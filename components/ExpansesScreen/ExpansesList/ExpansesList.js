import { FlatList, View, StyleSheet, Text, Modal } from "react-native";
import ExpansesItem from "./ExpanseItem";
import AllExpansesButton from "./AllExpansesButton";
import AddExpanseButton from "./AddExpanseButton";
import EditExpanseScreen from "../../../screens/Forms/EditExpanseScreen";
import { useState } from "react";

function ExpansesList({ data, renderAll }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [ID, setID] = useState();

  function RenderExpanseItem(itemData) {
    return <ExpansesItem expanse={itemData.item} onPressHandle={onPress} />;
  }
  function onPress(id) {
    setModalVisible(true);
    setID(id);
  }

  return (
    <View style={styles.rootContainer}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <EditExpanseScreen id={ID} setModalVisible={setModalVisible}/>
      </Modal>
      <View style={styles.buttonContainer}>
        {renderAll && <AllExpansesButton />}
        <AddExpanseButton />
      </View>
      {data.length > 0 ? (
        <View style={styles.listContainer}>
          <FlatList
            data={data}
            renderItem={(itemData) => RenderExpanseItem(itemData)}
          />
        </View>
      ) : (
        <Text style={styles.text}>No expenses yet.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  listContainer: {
    width: "100%",
    flex: 1,
  },
  text: {
    color: "#ffffff",
    textAlign: "center",
    margin: 8,
  },
  buttonContainer: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderColor: "#ffffff",
  },
});

export default ExpansesList;
