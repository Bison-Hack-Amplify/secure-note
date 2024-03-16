import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, TextInput } from "react-native";
import { registerRootComponent } from "expo";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  NavigationContainer,
  useRoute,
  useNavigation,
} from "@react-navigation/native";

import { Home } from "./Home";
import { NavBar } from "./NavBar";
import { Browse } from "./Browse";
import { Login } from "./Login";
import { MarketPlace } from "./MarketPlace";
import styles from "./App.scss";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Landing" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Browse" component={Browse} />
          <Stack.Screen name="MarketPlace" component={MarketPlace} />
        </Stack.Navigator>
        <NavBar />
      </NavigationContainer>
    </>
  );
}

registerRootComponent(App);
