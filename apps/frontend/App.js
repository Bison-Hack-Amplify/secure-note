import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, TextInput } from 'react-native';
import { registerRootComponent } from 'expo';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  NavigationContainer,
  useRoute,
  useNavigation,
} from '@react-navigation/native';

import { Home } from './Home';
import { NavBar } from './NavBar';
import { Browse } from './Browse';
import { Login } from './Login';
import { MarketPlace } from './MarketPlace';
import styles from './App.scss';
import {
  ScreenProvider,
  useScreenDispatch,
  useScreenState,
} from './stores/screen';

function NavigationController() {
  const Stack = createNativeStackNavigator();
  const { current: screen } = useScreenState();
  const showNavBar = screen != 'Landing';
  console.log(showNavBar);

  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='Landing' component={Login} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Browse' component={Browse} />
        <Stack.Screen name='MarketPlace' component={MarketPlace} />
      </Stack.Navigator>
      {showNavBar && <NavBar />}
    </>
  );
}

export default function App() {
  return (
    <>
      <ScreenProvider>
        <NavigationContainer>
          <NavigationController />
        </NavigationContainer>
      </ScreenProvider>
    </>
  );
}

registerRootComponent(App);
