import { Text, StyleSheet } from "react-native";
import Background from "../components/Backgrounds/Background";
import Form from "../components/Form/Form";
import { useSelector } from "react-redux";
import Wave from "../components/Backgrounds/Wave";

function EditExpanseScreen({ route }) {
  const expanses = useSelector((state) => state.expanses.expanses);

  const { id } = route.params;
  const data = expanses.find((item) => item.id === id);

  return (
    <Background>
      <Form setParams={()=>{}} resetParams={()=>{}} data={data} />
      <Wave/>

    </Background>
  );
}
const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    color: "#ffffff",
  },
});

export default EditExpanseScreen;
