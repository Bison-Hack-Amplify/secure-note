import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Touchable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { registerRootComponent } from "expo";
import styles from "./scss/Vocals.scss";
import { useNavigation } from "@react-navigation/native";

export const Beats = () => {
  const navigation = useNavigation();

  const Beats = [
    {
      id: "1",
      artName: "Midnight Groove",
      name: "Micheal Jacobs",
      price: "27.75",
      image: "",
    },
    {
      id: "2",
      artName: "Urban Pulse",
      name: "John Doe",
      price: "15.50",
      image: "",
    },
    {
      id: "3",
      artName: "Chillwave Vibes",
      name: "Tracy Lynn",
      price: "15.65",
      image: "",
    },
    {
      id: "4",
      artName: "Electro Pulse",
      name: "Mizz Beatz",
      price: "29.50",
      image: "",
    },
    {
      id: "5",
      artName: "Soul Scerenade",
      name: "Micheal Morrow",
      price: "37.00",
      image: "",
    },
    {
      id: "6",
      artName: "Funk Fusion",
      name: "Micheal Jacobs",
      price: "10.50",
      image: "",
    },
    {
      id: "7",
      artName: "NYC",
      name: "Knight Vibes",
      price: "14.87",
      image: "",
    },
    {
      id: "8",
      artName: "Freestyles",
      name: "NSM Beats",
      price: "20.50",
      image: "",
    },
    {
      id: "9",
      artName: "Hip-Hop Old School",
      name: "GloBeats",
      price: "16.78",
      image: "",
    },
    {
      id: "10",
      artName: "Old Texas",
      name: "Jacob Hills",
      price: "27.27",
      image: "",
    },
  ];

  return (
    <SafeAreaView style={styles.vocalsFoundation}>
      <ScrollView style={styles.musicBoxes}>
        {Beats.map((beat, index) => (
          <View style={styles.musicBoxView} key={index}>
            <View style={styles.musicBox}></View>
            <View style={styles.musicBoxContent}>
              <Text style={styles.musicArtName}>{beat.artName}</Text>
              <Text style={styles.musicName}>{beat.name}</Text>
              <View style={styles.PriceBuy}>
                <Text style={styles.musicPrice}>${beat.price} •</Text>
                <Text style={styles.musicButton}>Buy</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
