import { FlatList, View, StyleSheet, Text } from "react-native";
import ExpansesItem from "./ExpanseItem";
import AllExpansesButton from "./AllExpansesButton";
import AddExpanseButton from "./AddExpanseButton";
import { useSelector } from "react-redux";
import getDateValue from "../../../helperFunctions/getDateValue";

function ExpansesList({ data, renderAll }) {
  const dates = useSelector((state) => state.date.date);
  function RenderExpanseItem(itemData) {
    return <ExpansesItem expanse={itemData.item} />;
  }
  data = data.filter((item) => {
    const itemVal = getDateValue(item.date);
    return (
      itemVal >= getDateValue(dates.startDate) &&
      itemVal <= getDateValue(dates.endDate)
    );
  });
  return (
    <View style={styles.rootContainer}>
      <View style={styles.buttonContainer}>
        {renderAll && <AllExpansesButton />}
        <AddExpanseButton />
      </View>
      {data.length > 0 ? (
        <View style={styles.listContainer}>
          <FlatList
            data={data}
            renderItem={(itemData) => RenderExpanseItem(itemData)}
          />
        </View>
      ) : (
        <Text style={styles.text}>No expenses yet.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  listContainer: {
    width: "100%",
    flex: 1,
  },
  text: {
    color: "#ffffff",
    textAlign: "center",
    margin: 8,
  },
  buttonContainer: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderColor: "#ffffff",
  },
});

export default ExpansesList;
