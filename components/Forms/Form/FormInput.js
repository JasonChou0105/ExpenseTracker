import { StyleSheet, View, Text, Pressable, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

function FormInput({ type, title, onChangeHandle, value, toggleDatePicker }) {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>{title}: </Text>
      <View style={styles.inputContainer}>
        <View style={styles.iconContainer}>
          {type == "price" ? (
            <FontAwesome name="dollar" size={16} color="white" />
          ) : (
            <AntDesign
              name={type == "date" ? "calendar" : "shoppingcart"}
              size={18}
              color="white"
            />
          )}
        </View>
        {type == "date" ? (
          <Pressable onPress={toggleDatePicker} style={styles.dateInputContainer}>
            <View pointerEvents="none" style={styles.dateInputContainer}>
              <TextInput
                onPressIn={onChangeHandle}
                value={value}
                editable={false}
                placeholder="Enter date of purchase"
                placeholderTextColor={"#d2d1d184"}
                style={styles.textInput}
              />
            </View>
          </Pressable>
        ) : (
          <TextInput
            onChangeText={onChangeHandle}
            placeholder={`Enter ${type}`}
            placeholderTextColor={"#d2d1d184"}
            style={styles.textInput}
            value={value}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    width: "90%",
    margin: 8,
    marginTop: 16
  },
  iconContainer: {
    borderRightWidth: 1,
    borderRightColor: "#ffffff",
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
    width: "10%"
  },
  title: {
    color: "#ffffff",
    fontSize: 15,
    marginBottom: 8,
  },
  textInput: {
    color: "#ffffff",
    flex: 1
  },
  dateInputContainer: {
    flex: 1
  },
  inputContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ffffff",
    borderRadius: 8,
    alignItems: "center",
  },
});

export default FormInput;
