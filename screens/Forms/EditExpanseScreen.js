import { Text, StyleSheet } from "react-native";
import Background from "../../components/Backgrounds/Background";
import Wave from "../../components/Backgrounds/Wave";
import EditExpanseForm from "../../components/Forms/EditExpanseForm";

function EditExpanseScreen({ route }) {
  return (
    <Background>
      <EditExpanseForm id={route.params.id}/>
      <Wave />
    </Background>
  );
}
const styles = StyleSheet.create({});

export default EditExpanseScreen;
