import { useSelector } from "react-redux";
import ExpansesList from "../../components/ExpansesScreen/ExpansesList/ExpansesList";
import Background from "../../components/Backgrounds/Background";
import { View, StyleSheet, SafeAreaView } from "react-native";
import TimeRange from "../../components/ExpansesScreen/ExpansesHeader/TimeRange";
import SearchBar from "../../components/ExpansesScreen/ExpansesHeader/Searchbar";
import getDateValue from "../../helperFunctions/getDateValue";
import { useState } from "react";

function AllExpansesScreen() {
  const expanses = useSelector((state) => state.expanses.expanses);
  const dates = useSelector((state) => state.date.date);
  const [data, setData] = useState(expanses);

  function onChange(text){
    if(text.trim()){
      var newData = [];
      for(var i of expanses){
        add = true;
        for(var j = 0; j < text.length; j++){
          if(i.name[j]!=text[j]){
            add = false;
            break;
          }
        }
        if(add){
          newData.push(i)
        }
        setData(newData)
      }
    } else {
      setData(expanses)
    }
  }
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.listContainer}>
          <SearchBar onChange={onChange}/>
          <TimeRange startDate={dates.startDate} endDate={dates.endDate} />
          <ExpansesList data={data} renderAll={false} />
        </View>
      </SafeAreaView>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  listContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 24,
  },
});

export default AllExpansesScreen;
