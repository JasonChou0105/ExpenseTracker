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
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

//redux
import { store } from "./store/store";
import { Provider } from "react-redux";

const Stack = createStackNavigator();

export default function App() {
  const Drawer = createDrawerNavigator();
  const [fontsLoaded] = useFonts({
    "tech-mono": require("./Fonts/ShareTechMono-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  function DrawerNavigator() {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: Colors.background1 },
          headerTintColor: "white",
          drawerContentStyle: { backgroundColor: Colors.background2 },
          drawerInactiveTintColor: "white",
          drawerActiveTintColor: Colors.background3,
          drawerActiveBackgroundColor: Colors.background7,
        }}
      >
        <Stack.Screen
          options={{ headerShown: false }}
          name={"ExpansesScreen"}
          component={ExpansesScreen}
        />
        <Stack.Screen
          name="AllExpansesScreen"
          options={{ headerShown: false }}
          component={AllExpansesScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name={"AddExpanseScreen"}
          component={AddExpanseScreen}
        />
      </Drawer.Navigator>
    );
  }
  return (
    <Provider store={store}>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: Colors.background1 },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen
            name="drawer"
            options={{ headerShown: false }}
            component={DrawerNavigator}
          />
          <Stack.Screen
            name="EditExpanseScreen"
            options={{ headerShown: false }}
            component={EditExpanseScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
