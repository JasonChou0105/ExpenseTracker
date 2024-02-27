import AddExpanseForm from "../../components/Forms/AddExpanseForm";
import Background from "../../components/Backgrounds/Background";
import Wave from "../../components/Backgrounds/Wave";
import Header from "../../components/ExpansesScreen/Header";

function AddExpanseScreen() {
  return (
    <Background>
      <Header>Add Expense</Header>
      <AddExpanseForm />
      <Wave/>
    </Background>
  );
}

export default AddExpanseScreen;
