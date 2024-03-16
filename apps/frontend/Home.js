import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import { registerRootComponent } from 'expo';
import styles from './scss/Home.scss';
import { useNavigation } from '@react-navigation/native';
import { NavBar } from './NavBar';

export const Home = ({ route }) => {
  const navigation = useNavigation();

  return (
    <>
      <SafeAreaView style={styles.homeFoundation}></SafeAreaView>
    </>
  );
};
