import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, TextInput } from "react-native";
import { registerRootComponent } from "expo";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  NavigationContainer,
  useRoute,
  useNavigation,
} from "@react-navigation/native";
import { SignIn } from "./SignIn";
import { Home } from "./Home";
import { NavBar } from "./NavBar";

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
          <Stack.Screen name="Landing" component={SignIn} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
        <NavBar />
      </NavigationContainer>
    </>
  );
}

registerRootComponent(App);
