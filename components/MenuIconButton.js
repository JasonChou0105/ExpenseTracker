import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

function MenuIconButton() {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={navigation.openDrawer}
      android_ripple={{ color: "#aeaeae98" }}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name="menu-outline" size={30} color="white" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
export default MenuIconButton;
