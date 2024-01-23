import Colors from "../../../constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text } from "react-native";

function TotalExpansesTitle({ total }) {
  return (
    <LinearGradient
      start={{ x: 1, y: 1 }}
      end={{ x: 0, y: 0 }}
      colors={[Colors.gradient1, Colors.gradient2]}
      style={styles.totalExpansesContainer}
    >
      <LinearGradient
        colors={[Colors.background4, Colors.background2]}
        style={styles.textContainer}
      >
        <Text style={styles.totalExpansesText}>
          {total <= 99999999 ? `$${total}` : "no"}
        </Text>
      </LinearGradient>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  totalExpansesContainer: {
    margin: 16,
    borderRadius: 100,
    width: 200,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  totalExpansesText: {
    fontSize: 40,
    color: "#ffffff",
    fontFamily: "tech-mono",
    textAlign: "center"
  },
  textContainer: {
    width: 195,
    height: 195,
    backgroundColor: "#ffffff",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TotalExpansesTitle;
