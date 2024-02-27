import { useNavigation } from "@react-navigation/native";
import Button from './Button';

function AddExpanseButton() {
    const navigation = useNavigation()
    function onPressHandle(){
        navigation.navigate("AddExpanse")
    }

    return ( 
        <Button onPress={onPressHandle}>+ Add</Button>
     );
}


export default AddExpanseButton;

