import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  Image,
  Text,
  View,
  TextInput,
  Touchable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { registerRootComponent } from "expo";
import styles from "./scss/Browse.scss";
import { useNavigation } from "@react-navigation/native";

export const Browse = () => {
  const navigation = useNavigation();

  const artists = [
    {
      id: "1",
      name: "Daniel Reyes",
      title: "Pop producer & singer",
      samples: "20",
      image: "https://img.freepik.com/premium-photo/latin-caucasian-man-with-headphones-sitting-floor-practicing-guitar-watching-sheet-music_434738-1081.jpg",
    },
    {
      id: "1",
      name: "Michael Jacobs",
      title: "Hip Hop producer",
      samples: "47",
      image: "https://routenote.com/blog/wp-content/uploads/2019/03/Hip-Hop-producer.jpg",
    },
    {
      id: "1",
      name: "Natasha Royal",
      title: "Jazz singer",
      samples: "2",
      image:
        "https://previews.123rf.com/images/moodboard/moodboard1304/moodboard130401065/18779375-woman-singing-on-microphone-over-colored-background.jpg",
    },
    {
      id: "1",
      name: "Michelle Carson",
      title: "Pop singer",
      samples: "15",
      image:
        "https://thumbs.dreamstime.com/z/portrait-happy-black-woman-singer-music-studio-19193326.jpg?ct=jpeg",
    },
  ];

  return (
    <SafeAreaView style={styles.browseFoundation}>
      <Text style={styles.word}>SecureNote</Text>
      <ScrollView style={styles.artistList}>
        {artists.map((card) => (
          <View style={styles.artistCard} key={card.id}>
            <View style={styles.artistCardContent}>
              <Image
                source={{ uri: card.image }}
                style={styles.artistCardPic}
              />
              <View style={styles.artistCardText}>
                <Text style={styles.artistName}>{card.name}</Text>
                <Text style={styles.artistGenre}>{card.title}</Text>
                <Text style={styles.artistSamples}>{card.samples} samples available</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
