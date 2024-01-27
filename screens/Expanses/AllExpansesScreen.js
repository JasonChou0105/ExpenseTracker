import { useSelector } from "react-redux";
import ExpansesList from "../../components/ExpansesScreen/ExpansesList/ExpansesList";
import Background from "../../components/Backgrounds/Background";
import BackButton from "../../components/BackButton";
import Wave from "../../components/Backgrounds/Wave";
import { View, StyleSheet } from "react-native";
import TimeRange from "../../components/ExpansesScreen/ExpansesHeader/TimeRange";
import getMinDate from "../../helperFunctions/getMinDate";

function AllExpansesScreen() {
  const expanses = useSelector((state) => state.expanses.expanses);
  const dates = useSelector((state) => state.date.date);

  return (
    <Background>
      <BackButton />
      <View style={styles.listContainer}>
        <TimeRange startDate={dates.startDate} endDate={dates.endDate}/>
        <ExpansesList data={expanses} />
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 24
    }
})

export default AllExpansesScreen;
