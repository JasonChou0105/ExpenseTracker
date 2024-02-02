import { useSelector } from "react-redux";
import ExpansesList from "../../components/ExpansesScreen/ExpansesList/ExpansesList";
import Background from "../../components/Backgrounds/Background";
import { View, StyleSheet, SafeAreaView } from "react-native";
import TimeRange from "../../components/ExpansesScreen/ExpansesHeader/TimeRange";

function AllExpansesScreen() {
  const expanses = useSelector((state) => state.expanses.expanses);
  const dates = useSelector((state) => state.date.date);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.listContainer}>
          <TimeRange startDate={dates.startDate} endDate={dates.endDate} />
          <ExpansesList data={expanses} renderAll={false} />
        </View>
      </SafeAreaView>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  listContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 24,
  },
});

export default AllExpansesScreen;
