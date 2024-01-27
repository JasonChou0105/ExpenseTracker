import { View, StyleSheet, Image } from "react-native";
import Colors from "../../../constants/Colors";
import TimeRange from "./TimeRange";
import TotalExpansesTitle from "./TotalExpansesTitle";
import SearchBar from "./Searchbar";
import MenuIconButton from "../../MenuIconButton";
import { useSelector } from "react-redux";

function TotalExpansesHeader({ totalExpanses }) {
  const dates = useSelector((state) => state.date.date);

  return (
    <View style={styles.rootContainer}>
      <View style={styles.searchContainer}>
        <MenuIconButton/>
        <SearchBar />
      </View>
      <View style={styles.expanseContainer}>
        <TotalExpansesTitle total={totalExpanses} />
        <TimeRange startDate={dates.startDate} endDate={dates.endDate} />
      </View>

      <View style={styles.border}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  expanseContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  border:{
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.background7,
    width: "65%",
  },
  rootContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 24,
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TotalExpansesHeader;
