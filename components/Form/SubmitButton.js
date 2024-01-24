import { Text, Pressable, StyleSheet } from "react-native";

function SubmitButton({ submitHandle }) {
  return (
    <Pressable style={styles.button} onPress={submitHandle}>
      <Text style={styles.text}>Add expense</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#ffffff",
    textAlign: "center",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ffffff",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    margin: 8
  },
});

export default SubmitButton;
