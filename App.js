//components
import AddExpanseScreen from "./screens/Forms/AddExpanseScreen";
import AppLoading from "expo-app-loading";
import AllExpansesScreen from "./screens/Expanses/AllExpansesScreen";
import { StatusBar } from "expo-status-bar";
import { AntDesign } from "@expo/vector-icons";

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
import Colors from "./constants/Colors";

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
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: Colors.highlight1,
          tabBarStyle: {
            height: 70,
            backgroundColor: Colors.background1,
            paddingBottom: 10,
            borderTopWidth: 0,
          },
          headerStyle: {
            backgroundColor: Colors.background4,
            borderBottomWidth: 1,
          },
          headerTitleStyle: {
            color: "#ffffff",
          },
        }}
      >
        <Tab.Screen
          name="AllTimeExpanses"
          component={AllTimeExpanses}
          options={{
            title: "All Time",
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="clockcircleo" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="AddExpanse"
          component={AddExpanseScreen}
          options={{
            title: "Add",
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="pluscircleo" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="RecentExpanses"
          component={RecentExpanses}
          options={{
            title: "Past 7 Days",
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="hourglass" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
  return (
    <Provider store={store}>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: Colors.background4,
              borderBottomWidth: 1,
            },
            headerTitleStyle: {
              color: "#ffffff",
            },
            headerTintColor: "#ffffff",
          }}
        >
          <Stack.Screen
            name="BottemTabs"
            component={BottemTabs}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="AllExpansesScreen"
            options={{ title: 'All Expenses' }}
            component={AllExpansesScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
