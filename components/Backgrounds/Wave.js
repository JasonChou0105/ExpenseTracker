import Colors from "../../constants/Colors";
import WaveSvg from "../../constants/WaveSvg";
import { StyleSheet, View } from "react-native";

function Wave() {
  return (
    <View style={styles.background}>
      <WaveSvg style={styles.wave} />
      <View style={styles.bottemBar}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    height: "22%"
  },
  wave: {
    bottom: 0,
    width: "100%",
    height: 135, // Adjust this value as needed
  },
  bottemBar: {
    backgroundColor: Colors.background5,
    flex: 1
  }
});
export default Wave;
