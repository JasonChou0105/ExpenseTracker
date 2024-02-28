import { useNavigation } from "@react-navigation/native";
import Button from './Button';

function AllExpansesButton() {
    const navigation = useNavigation()

    function onPressHandle(){
        navigation.navigate("AllExpansesScreen")
    }

    return ( 
        <Button onPress={onPressHandle}>See All</Button>
     );
}


export default AllExpansesButton;