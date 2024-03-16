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
import styles from "./scss/Following.scss";
import { useNavigation } from "@react-navigation/native";

export const Following = () => {
  const navigation = useNavigation();

  const Beats = [
    {
      id: "1",
      artName: "Midnight Groove",
      name: "Micheal Jacobs",
      price: "27.75",
      buy: "buy",
      image: "",
    },
    {
      id: "2",
      artName: "Urban Pulse",
      name: "John Doe",
      price: "15.50",
      buy: "bought",
      image: "",
    },
    {
      id: "3",
      artName: "Chillwave Vibes",
      name: "Tracy Lynn",
      price: "15.65",
      buy: "buy",
      image: "",
    },
    {
      id: "4",
      artName: "Electro Pulse",
      name: "Mizz Beatz",
      price: "29.50",
      buy: "buy",
      image: "",
    },
    {
      id: "5",
      artName: "Soul Scerenade",
      name: "Micheal Morrow",
      price: "37.00",
      buy: "buy",
      image: "",
    },
    {
      id: "6",
      artName: "Funk Fusion",
      name: "Micheal Jacobs",
      price: "10.50",
      buy: "buy",
      image: "",
    },
    {
      id: "7",
      artName: "NYC",
      name: "Knight Vibes",
      price: "14.87",
      buy: "buy",
      image: "",
    },
    {
      id: "8",
      artName: "Freestyles",
      name: "NSM Beats",
      price: "20.50",
      buy: "buy",
      image: "",
    },
    {
      id: "9",
      artName: "Hip-Hop Old School",
      name: "GloBeats",
      price: "16.78",
      buy: "buy",
      image: "",
    },
    {
      id: "10",
      artName: "Old Texas",
      name: "Jacob Hills",
      price: "27.27",
      buy: "bought",
      image: "",
    },
  ];

  return (
    <SafeAreaView style={styles.vocalsFoundation}>
      <ScrollView style={styles.musicBoxes}>
        {Beats.map((beat, index) => (
          <View style={styles.musicBoxView} key={index}>
            <View style={styles.musicBox}></View>
            <View style={styles.musicBoxBelow}>
              <View style={styles.musicBoxContent}>
                <Text style={styles.musicArtName}>{beat.artName}</Text>
                <Text style={styles.musicName}>{beat.name}</Text>
                <Text style={styles.musicPrice}>${beat.price}</Text>
              </View>
              <View style={styles.buyButton}>
              <Text style={styles.buyButtonText}>{beat.buy}</Text>
              </View>
              
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
