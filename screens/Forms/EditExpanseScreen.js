import { Text, StyleSheet } from "react-native";
import Background from "../../components/Backgrounds/Background";
import Wave from "../../components/Backgrounds/Wave";
import EditExpanseForm from "../../components/Forms/EditExpanseForm";

function EditExpanseScreen({ id, setModalVisible }) {
  return (
    <Background>
      <EditExpanseForm id={id} setModalVisible={setModalVisible}/>
      <Wave />
    </Background>
  );
}
const styles = StyleSheet.create({});

export default EditExpanseScreen;
