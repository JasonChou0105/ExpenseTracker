import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ExpansesScreen from "./screens/Expanses/ExpansesScreen";
import AddExpanseScreen from "./screens/Forms/AddExpanseScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useFonts } from "expo-font";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Colors from "./constants/Colors";
import AppLoading from "expo-app-loading";
import { Provider } from "react-redux";
import { store } from "./store/store";
import EditExpanseScreen from "./screens/Forms/EditExpanseScreen";
import AllExpansesScreen from "./screens/Expanses/AllExpansesScreen";

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
    <>
      <StatusBar style="light" />
      <Provider store={store}>
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
    </>
  );
}
