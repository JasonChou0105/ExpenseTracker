import { View, StyleSheet, Image, SafeAreaView } from "react-native";
import Colors from "../../../constants/Colors";
import TimeRange from "./TimeRange";
import TotalExpansesTitle from "./TotalExpansesTitle";
import SearchBar from "./Searchbar";
import MenuIconButton from "../../MenuIconButton";
import { useSelector } from "react-redux";

function TotalExpansesHeader({ totalExpanses }) {
  const dates = useSelector((state) => state.date.date);

  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.expanseContainer}>
        <TotalExpansesTitle total={totalExpanses} />
        <TimeRange startDate={dates.startDate} endDate={dates.endDate} />
      </View>

      <View style={styles.border}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  expanseContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  border:{
    borderBottomWidth: 1,
    opacity: 0.5,
    borderBottomColor: Colors.background7,
    width: "100%",
    margin: 16
  },
  rootContainer: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
});

export default TotalExpansesHeader;
