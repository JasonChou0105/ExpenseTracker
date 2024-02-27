import { View, Text, StyleSheet } from "react-native";

function Header({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        justifyContent: "center",
        paddingHorizontal: 32,
        paddingTop: 32,
    },
    title: {
        fontSize: 20,
        color: "#ffffff"
    }
})

export default Header;
