import { TextInput, StyleSheet, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import Colors from "../../../constants/Colors";

function SearchBar({onChange}) {
  return (
    <View style={styles.rootContainer}>
      <Entypo name="magnifying-glass" size={17} color="black" />
      <TextInput style={styles.searchBar} placeholder="Search Expenses" onChangeText={onChange}/>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: "row",
    width: "90%",
    backgroundColor: Colors.background8,
    borderRadius: 16,
    height: 40,
    alignItems: "center",
    padding: 10,
    margin: 16
  },
  searchBar: {
    fontSize: 15,
    marginLeft: 4
  },
});

export default SearchBar;
