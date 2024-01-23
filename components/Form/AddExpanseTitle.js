import { Text, StyleSheet } from 'react-native'

function AddExpanseTitle({children}) {
    return ( 
        <Text style={styles.title}>{children}</Text>
     );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        color: "#ffffff"
    }
})

export default AddExpanseTitle;