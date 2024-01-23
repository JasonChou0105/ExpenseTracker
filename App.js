import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ExpansesScreen from "./screens/ExpansesScreen";
import AddExpanseScreen from "./screens/AddExpanseScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useFonts } from "expo-font";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Colors from "./constants/Colors";
import AppLoading from "expo-app-loading";
import { Provider } from "react-redux";
import { store } from "./store/store";
import EditExpanseScreen from "./screens/EditExpanseScreen";

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
          name={"AllExpansesScreen"}
          component={ExpansesScreen}
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
