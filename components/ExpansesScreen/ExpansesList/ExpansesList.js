import { FlatList, View, StyleSheet, Text } from "react-native";
import ExpansesItem from "./ExpanseItem";

function ExpansesList({ data }) {
  function RenderExpanseItem(itemData) {
    return <ExpansesItem expanse={itemData.item} />;
  }

  return (
    <View style={styles.rootContainer}>
      {data.length>0 ? (
        <FlatList
          data={data}
          renderItem={(itemData) => RenderExpanseItem(itemData)}
        />
      ) : (
        <Text style={styles.text}>No expenses yet.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  text: {
    color: "#ffffff",
  },
});

export default ExpansesList;
