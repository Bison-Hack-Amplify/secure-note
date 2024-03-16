import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
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
      buy: "buy",
      image:
        "https://thumbs.dreamstime.com/b/dynamic-radial-color-sound-equalizer-design-music-album-cover-template-abstract-circular-digital-data-form-vector-160916775.jpg",
    },
    {
      id: "2",
      artName: "Urban Pulse",
      name: "John Doe",
      price: "15.50",
      buy: "bought",
      image:
        "https://media.istockphoto.com/id/1203512641/photo/the-mockup-template-with-the-new-vinyl-disc-on-color-surface-music-album-cover-design.webp?b=1&s=170667a&w=0&k=20&c=UdlJXnhRwtL2APP1wUmbyU14DKC6_AcrMfNPpTY7Mh0=",
    },
    {
      id: "3",
      artName: "Chillwave Vibes",
      name: "Tracy Lynn",
      price: "15.65",
      buy: "buy",
      image:
        "https://cdn.pixabay.com/photo/2017/11/26/14/24/cd-cover-2978944_640.jpg",
    },
    {
      id: "4",
      artName: "Electro Pulse",
      name: "Mizz Beatz",
      price: "29.50",
      buy: "buy",
      image:
        "https://www.shutterstock.com/image-vector/retro-futuristic-background-1980s-style-600nw-487600702.jpg",
    },
    {
      id: "5",
      artName: "Soul Scerenade",
      name: "Micheal Morrow",
      price: "37.00",
      buy: "buy",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXJUqz5CiWm-57MZIaOE1xBWoTMSwqD3w27Q&usqp=CAU",
    },
    {
      id: "6",
      artName: "Funk Fusion",
      name: "Micheal Jacobs",
      price: "10.50",
      buy: "buy",
      image:
        "https://media.istockphoto.com/id/1163699020/vector/3d-headphone-with-sound-waves-on-dark-background.jpg?s=612x612&w=0&k=20&c=ruKHhUDC_n14Hg8U7djH6QKELYyp_u1EZiAVRxGtxyc=",
    },
    {
      id: "7",
      artName: "NYC",
      name: "Knight Vibes",
      price: "14.87",
      buy: "buy",
      image:
        "https://a.bff.fm/image/original/1667480041QzGEmUaE-cover-art.jpg?width=300&height=300&fit=crop",
    },
    {
      id: "8",
      artName: "Freestyles",
      name: "NSM Beats",
      price: "20.50",
      buy: "buy",
      image: "https://f4.bcbits.com/img/a3670563273_65",
    },
    {
      id: "9",
      artName: "Hip-Hop Old School",
      name: "GloBeats",
      price: "16.78",
      buy: "buy",
      image:
        "https://townsquare.media/site/812/files/2023/03/attachment-00602547742254-rgb.jpg?w=980&q=75",
    },
    {
      id: "10",
      artName: "Old Texas",
      name: "Jacob Hills",
      price: "27.27",
      buy: "bought",
      image:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/country-music-album-cover-song-cover-design-template-c948958f8fe77143e46718d6e0dcb1bf_screen.jpg?ts=1671594435",
    },
  ];

  return (
    <SafeAreaView style={styles.vocalsFoundation}>
      <ScrollView style={styles.musicBoxes}>
        {Beats.map((beat, index) => (
          <View style={styles.musicBoxView} key={index}>
            {/* <View style={styles.musicBox}></View> */}
            <Image style={styles.musicBox} source={{ uri: beat.image }} />
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
