import { View, StyleSheet } from "react-native";
import ExpansesList from "../components/ExpansesScreen/ExpansesList/ExpansesList";
import Background from "../components/Backgrounds/Background";
import TotalExpansesHeader from "../components/ExpansesScreen/ExpansesHeader/TotalExpansesHeader";
import { useSelector } from "react-redux";

function ExpansesScreen() {
  const expanses = useSelector((state)=>state.expanses.expanses);
  const total = expanses.reduce(
    (curTotal, curExpanse) => curTotal + parseFloat(curExpanse.price),
    0,
  );

  return (
    <Background>
      <View style={styles.container}>
        <TotalExpansesHeader
          totalExpanses={total}
          startDate={new Date(2022, 0, 1)}
          endDate={new Date(2022, 0, 8)}
        />
        <ExpansesList data={expanses} />
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ExpansesScreen;
