import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, TextInput } from "react-native";
import { registerRootComponent } from "expo";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  NavigationContainer,
  useRoute,
  useNavigation,
} from "@react-navigation/native";
import { signIn } from "./signIn";

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
          <Stack.Screen name="Landing" component={signIn} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

registerRootComponent(App);
