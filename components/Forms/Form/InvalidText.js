import { Text, StyleSheet, View } from "react-native";
import Colors from "../../../constants/Colors";
import { MaterialIcons } from '@expo/vector-icons';

function InvalidText({children}) {
    return ( 
        <View style={styles.container}>
            <MaterialIcons name="error-outline" size={20} color="red" />
            <Text style={styles.text}>{children}</Text>
        </View>
     );
}

const styles = StyleSheet.create({
    text: {
        color: Colors.error,
    },
    container: {
        flexDirection: "row"
    }
})

export default InvalidText;