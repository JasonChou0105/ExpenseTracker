import { FlatList, View, StyleSheet } from "react-native";
import ExpansesItem from "./ExpanseItem";

function ExpansesList({ data }) {

  function RenderExpanseItem(itemData) {
    return <ExpansesItem expanse={itemData.item} />;
  }

  return (
    <View style={styles.rootContainer}>
      <FlatList
        data={data}
        renderItem={(itemData) => RenderExpanseItem(itemData)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});

export default ExpansesList;
