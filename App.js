//components
import ExpansesScreen from "./screens/Expanses/ExpansesScreen";
import AddExpanseScreen from "./screens/Forms/AddExpanseScreen";
import Colors from "./constants/Colors";
import AppLoading from "expo-app-loading";
import EditExpanseScreen from "./screens/Forms/EditExpanseScreen";
import AllExpansesScreen from "./screens/Expanses/AllExpansesScreen";
import { StatusBar } from "expo-status-bar";

//hooks
import { useFonts } from "expo-font";

//nav
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//redux
import { store } from "./store/store";
import { Provider } from "react-redux";
import AllTimeExpanses from "./screens/Expanses/AllTimeExpanses";
import RecentExpanses from "./screens/Expanses/RecentExpanses";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "tech-mono": require("./Fonts/ShareTechMono-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  function BottemTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="AllTimeExpanses"
          component={AllTimeExpanses}
          options={{ title: "All Time" }}
        />
        <Tab.Screen
          name="AddExpanse"
          component={AddExpanseScreen}
          options={{ title: "Add" }}
        />
        <Tab.Screen
          name="RecentExpanses"
          component={RecentExpanses}
          options={{ title: "Past 7 Days" }}
        />
      </Tab.Navigator>
    );
  }
  return (
    <Provider store={store}>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="BottemTabs"
            component={BottemTabs}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="AllExpansesScreen"
            component={AllExpansesScreen}
          />
          <Stack.Screen name="AddExpanseScreen" component={AddExpanseScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
