import { View, StyleSheet } from "react-native";
import ExpansesList from "../../components/ExpansesScreen/ExpansesList/ExpansesList";
import Background from "../../components/Backgrounds/Background";
import TotalExpansesHeader from "../../components/ExpansesScreen/ExpansesHeader/TotalExpansesHeader";
import { useDispatch, useSelector } from "react-redux";
import { setStartDate } from "../../store/date";
import getMinDate from "../../helperFunctions/getMinDate";
import { useEffect } from "react";


function ExpansesScreen() {
  const expanses = useSelector((state) => state.expanses.expanses);
  const dispatch = useDispatch()

  const total = expanses.reduce(
    (curTotal, curExpanse) => curTotal + parseFloat(curExpanse.price),
    0
  );
  useEffect(() => {
    if (expanses.length > 0) {
      dispatch(
        setStartDate({
          date: getMinDate(expanses),
        })
      );
    }
  }, [dispatch, expanses]);
  return (
    <Background>
      <View style={styles.container}>
        <TotalExpansesHeader
          totalExpanses={total}
        />
        <ExpansesList data={expanses} renderAll={true} />
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
