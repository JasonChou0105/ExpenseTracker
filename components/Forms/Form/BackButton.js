import { Pressable, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function BackButton({setModalVisible}) {

  function back() {
    setModalVisible(false)
  }
  return (
    <Pressable onPress={back} style={styles.backButton}>
      <Ionicons name="arrow-back-outline" size={24} color="white" />
      <Text style={styles.backText}> back</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    marginTop: 32,
    marginHorizontal: 16,
  },
  backText: {
    fontSize: 16,
    color: "#ffffff",
  },
});

export default BackButton;
