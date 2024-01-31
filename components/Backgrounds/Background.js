import { StyleSheet, View } from "react-native";
import Colors from "../../constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import DismissKeyboard from "../DismissKeyboard";

function Background({ children }) {
  return (
    <DismissKeyboard>
      <View style={styles.background}>
        <LinearGradient
          colors={[Colors.background3, Colors.background1]}
          style={styles.background}
        >
          {children}
        </LinearGradient>
      </View>
    </DismissKeyboard>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});

export default Background;
