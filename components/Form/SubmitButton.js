import { Text, Pressable, StyleSheet } from "react-native";

function SubmitButton({ sumbitHandle }) {
  return (
    <Pressable style={styles.button} onPress={sumbitHandle}>
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
