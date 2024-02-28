import { View, StyleSheet } from "react-native";
import ExpansesList from "../../components/ExpansesScreen/ExpansesList/ExpansesList";
import Background from "../../components/Backgrounds/Background";
import TotalExpansesHeader from "../../components/ExpansesScreen/ExpansesHeader/TotalExpansesHeader";
import { useDispatch, useSelector } from "react-redux";
import date, { setStartDate } from "../../store/date";
import getMinDate from "../../helperFunctions/getMinDate";
import { useEffect } from "react";
import getDateValue from "../../helperFunctions/getDateValue";


function ExpansesScreen() {
  const expanses = useSelector((state) => state.expanses.expanses);
  const dates = useSelector((state) => state.date.date);
  const dispatch = useDispatch()


  useEffect(() => {
    if (expanses.length > 0) {
      dispatch(
        setStartDate({
          date: getMinDate(expanses),
        })
      );
    }
  }, [dispatch, expanses]);
  data = expanses.filter((item) => {
    const itemVal = getDateValue(item.date);
    return (
      itemVal >= getDateValue(dates.startDate) &&
      itemVal <= getDateValue(dates.endDate)
    );
  });
  const total = data.reduce(
    (curTotal, curExpanse) => curTotal + parseFloat(curExpanse.price),
    0
  );
  return (
    <Background>
      <View style={styles.container}>
        <TotalExpansesHeader
          totalExpanses={total}
        />
        <ExpansesList data={data} renderAll={true} />
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ExpansesScreen;
