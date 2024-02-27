import { Ionicons } from "@expo/vector-icons";
import { Alert, Pressable, StyleSheet, Text } from "react-native";
import { useDispatch } from "react-redux";
import { removeExpanse } from "../../../store/expanses";

function RemoveButton({ id, name, setModelVisable }) {
  const dispatch = useDispatch();

  function confirmDelete() {
    Alert.alert(`Are you sure you want to delete ${name}?`, 'Deleted expenses cannot be recovered', [
      {
        text: "Cancel",
      },
      {
        text: "Remove",
        onPress: removeHandle,
      },
    ]);
  }

  function removeHandle() {
    setModelVisable(false);
    dispatch(removeExpanse({ id: id }));
  }

  return (
    <Pressable style={styles.button} onPress={confirmDelete}>
      <Ionicons name="trash" size={20} color="white" />
      <Text style={styles.text}> Delete</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#8a0000",
  },
  text: {
    color: "#ffffff",
  },
});

export default RemoveButton;
