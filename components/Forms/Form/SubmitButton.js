import { Text, Pressable, StyleSheet } from "react-native";

function SubmitButton({ submitHandle, title }) {
  return (
    <Pressable style={styles.button} onPress={submitHandle}>
      <Text style={styles.text}>{title}</Text>
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
    margin: 16
  },
});

export default SubmitButton;
