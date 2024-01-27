import { Pressable, Text, StyleSheet } from 'react-native'
import { useNavigation } from "@react-navigation/native";

function AllExpansesButton() {
    const navigation = useNavigation()
    function onPressHandle(){
        navigation.navigate("AllExpansesScreen")
    }

    return ( 
        <Pressable style={styles.button} onPress={onPressHandle}>
            <Text style={styles.text}>See all expenses</Text>
        </Pressable>
     );
}

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderColor: "#ffffff",
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 16,
        margin: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: "#ffffff"
    }
})

export default AllExpansesButton;