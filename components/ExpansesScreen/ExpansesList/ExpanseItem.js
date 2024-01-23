import { View, Text, StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";
import getDateInfo from "../../../helperFunctions/getDateInfo";
import { LinearGradient } from "expo-linear-gradient";

function ExpansesItem({ expanse }) {
  const [dayOfWeek, day, month, year] = getDateInfo(expanse.date);
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={[Colors.background5, Colors.background4, Colors.background3]}
      style={styles.rootContainer}
    >
      <View style={styles.infoContainer}>
        <Text style={styles.itemText}>{expanse.name}</Text>
        <Text
          style={styles.dateText}
        >{`${year}/${month}/${day} - ${dayOfWeek}`}</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>${expanse.price}</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    borderRadius: 8,
    padding: 8,
    margin: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "85%",
    alignSelf: "center",
  },
  priceContainer: {
    borderRadius: 8,
    backgroundColor: "#ffffff",
    padding: 13,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  infoContainer: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
  itemText: {
    color: "#ffffff",
    fontSize: 17,
  },
  priceText: {
    color: Colors.background3,
    fontWeight: "bold",
    fontSize: 15,
  },
  dateText: {
    color: "#ffffff",
    fontStyle: "italic",
    fontSize: 11,
  },
});

export default ExpansesItem;
