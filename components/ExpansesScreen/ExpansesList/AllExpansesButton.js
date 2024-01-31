import { useNavigation } from "@react-navigation/native";
import Button from './Button';
import { useDispatch, useSelector } from "react-redux";
import { setEndDate, setStartDate } from "../../../store/date";
import getMinDate from "../../../helperFunctions/getMinDate";

function AllExpansesButton() {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const expanses = useSelector((state) => state.expanses.expanses);

    function onPressHandle(){
        if (expanses.length > 0) {
            dispatch(
              setStartDate({
                date: getMinDate(expanses),
              })
            );
            dispatch(
              setEndDate({
                date: new Date().toDateString(),
              })
            );
          }
        navigation.navigate("AllExpansesScreen")
    }

    return ( 
        <Button onPress={onPressHandle}>See All</Button>
     );
}


export default AllExpansesButton;