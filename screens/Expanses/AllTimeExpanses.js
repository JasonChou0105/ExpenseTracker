import { useDispatch, useSelector } from "react-redux";
import ExpansesScreen from "./ExpansesScreen";
import { setStartDate } from "../../store/date";
import getMinDate from "../../helperFunctions/getMinDate";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

function AllTimeExpanses() {
  const expanses = useSelector((state) => state.expanses.expanses);
  const dispatch = useDispatch();

  const navigation = useNavigation();

  useEffect(() => {
    const onTabFocus = () => {
      // Run this code every time the tab comes into focus
      const startDate =
        expanses.length > 0 ? getMinDate(expanses) : new Date().toDateString();
      dispatch(setStartDate({ date: startDate }));
    };

    const unsubscribe = navigation.addListener("focus", onTabFocus);

    // Clean up the listener when the component is unmounted
    return () => {
      unsubscribe();
    };
  }, [expanses, navigation]);

  return <ExpansesScreen />;
}

export default AllTimeExpanses;
