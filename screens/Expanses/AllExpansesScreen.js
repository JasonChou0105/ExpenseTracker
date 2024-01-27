import { useSelector } from "react-redux";
import ExpansesList from "../../components/ExpansesScreen/ExpansesList/ExpansesList";
import Background from "../../components/Backgrounds/Background";
import BackButton from "../../components/BackButton";
import Wave from "../../components/Backgrounds/Wave";
import { View, StyleSheet } from "react-native";
import TimeRange from "../../components/ExpansesScreen/ExpansesHeader/TimeRange";

function AllExpansesScreen() {
  const expanses = useSelector((state) => state.expanses.expanses);

  return (
    <Background>
      <BackButton />
      <View style={styles.listContainer}>
        <TimeRange />
        <ExpansesList data={expanses} />
      </View>
      <Wave />
    </Background>
  );
}

const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 24
    }
})

export default AllExpansesScreen;
