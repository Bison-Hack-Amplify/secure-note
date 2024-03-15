import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { registerRootComponent } from 'expo';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './App.scss';

export default function App() {
  return (
    <View style={styles.test}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style='auto' />
    </View>
  );
}

registerRootComponent(App);
