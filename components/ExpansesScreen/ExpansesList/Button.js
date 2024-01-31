import { Pressable, Text, StyleSheet } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import Colors from '../../../constants/Colors';

function Button({onPress, children}) {
    const navigation = useNavigation()
    function onPressHandle(){
        navigation.navigate("AllExpansesScreen")
    }

    return ( 
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{children}</Text>
        </Pressable>
     );
}

const styles = StyleSheet.create({
    button: {
        borderWidth: 2,
        borderColor: "#c6c6c692",
        borderRadius: 32,
        paddingVertical: 8,
        paddingHorizontal: 16,
        margin: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: Colors.highlight1
    }
})

export default Button;