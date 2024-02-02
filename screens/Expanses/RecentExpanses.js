import { useDispatch, useSelector } from "react-redux";
import ExpansesScreen from "./ExpansesScreen";
import { setStartDate } from "../../store/date";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

function RecentExpanses() {
  const expanses = useSelector((state) => state.expanses.expanses);
  const dates = useSelector((state) => state.date.date);
  const dispatch = useDispatch();

  const navigation = useNavigation();

  useEffect(() => {
    const onTabFocus = () => {
      // Run this code every time the tab comes into focus
      const startDate = new Date(
        new Date().setDate(new Date().getDate() - 7)
      ).toDateString()
      dispatch(
        setStartDate({
          date: startDate,
        })
      );
    };

    const unsubscribe = navigation.addListener("focus", onTabFocus);

    // Clean up the listener when the component is unmounted
    return () => {
      unsubscribe();
    };
  }, [expanses, navigation]);

  return <ExpansesScreen />;
}

export default RecentExpanses;
