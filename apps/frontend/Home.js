import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { registerRootComponent } from "expo";
import styles from "./scss/Home.scss";
import { useNavigation } from "@react-navigation/native";

export const Home = () => {
  const navigation = useNavigation();

  return <SafeAreaView style={styles.homeFoundation}></SafeAreaView>;
};
