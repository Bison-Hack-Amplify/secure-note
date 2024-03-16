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

export const Vocals = () => {
  const navigation = useNavigation();

  const Beats = [
    {
      id: "1",
      artName: "Smooth Jazz",
      name: "Micheal Jacobs",
      price: "15.50",
      image: "",
    },
    {
      id: "2",
      artName: "Neo-Soul",
      name: "Nya Brown",
      price: "30.50",
      image: "",
    },
    {
      id: "3",
      artName: "Soprano Choir",
      name: "Olivia Lewis",
      price: "28.65",
      image: "",
    },
    {
      id: "4",
      artName: "Gospel Chants",
      name: "Hannah Right",
      price: "29.50",
      image: "",
    },
    {
      id: "5",
      artName: "Latin Fusion",
      name: "Lizbeth Gomez",
      price: "37.00",
      image: "",
    },
    {
      id: "6",
      artName: "Kids Laughing",
      name: "Eli Thomas",
      price: "10.50",
      image: "",
    },
    {
      id: "7",
      artName: "CityLove",
      name: "Albert  Diaz",
      price: "24.87",
      image: "",
    },
    {
      id: "8",
      artName: "DC Freestyles",
      name: "2x",
      price: "35.50",
      image: "",
    },
    {
      id: "9",
      artName: "Going up",
      name: "OhNo!",
      price: "28.78",
      image: "",
    },
    {
      id: "10",
      artName: "Song For You",
      name: "Caleb",
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
