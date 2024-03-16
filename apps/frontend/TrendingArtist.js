import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { registerRootComponent } from "expo";
import React, { useState } from "react";
import styles from "./scss/Following.scss";
import { useNavigation } from "@react-navigation/native";
import { Toggle } from "./Toggle";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

export const TrendingArtist = () => {
  const navigation = useNavigation();

  const [selectedOption, setSelectedOption] = useState("Following");

  // Define a function to handle the toggle change
  const handleToggleChange = (option) => {
    setSelectedOption(option);
  };

  // Define a function to render the content based on the selected option

  return (
    <SafeAreaView style={styles.homeFoundation}>
      <Text style={styles.text}>TA</Text>
    </SafeAreaView>
  );
};
