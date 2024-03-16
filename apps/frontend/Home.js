import { StatusBar } from 'expo-status-bar';
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
import styles from "./scss/Home.scss";
import { useNavigation } from "@react-navigation/native";
import { Toggle } from "./Toggle";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { Following } from "./Following";
import { TrendingArtist } from "./TrendingArtist";
import { Event } from "./Events";
} from 'react-native';


export const Home = ({ route }) => {
  const navigation = useNavigation();


  const [selectedOption, setSelectedOption] = useState("Following");

  // Define a function to handle the toggle change
  const handleToggleChange = (option) => {
    setSelectedOption(option);
  };

  // Define a function to render the content based on the selected option
  // const renderContent = () => {
  //   switch (selectedOption) {
  //     case "Following":
  //       return <Following />;
  //     case "Trending Artist":
  //       return <TrendingArtist />;
  //     case "Events":
  //       return <Events />;
  //     default:
  //       return null;
  //   }
  // };

  return (
    <SafeAreaView style={styles.homeFoundation}>
      <View style={styles.topScreen}>
        <Image
          source={{
            uri: "https://images.pexels.com/photos/894156/pexels-photo-894156.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          }}
          style={styles.profilePic}
        />
        <Text style={styles.word}>SecureNote</Text>
        <FontAwesome name="search" size={20} color="#FF3030" />
      </View>

      <View style={styles.topToggle}>
        <Toggle handleToggleChange={handleToggleChange} />
      </View>
      {selectedOption === "Following" && <Following />}
      {selectedOption === "Trending Artist" && <TrendingArtist />}
      {selectedOption === "Events" && <Following />}
    </SafeAreaView>

  );
};
