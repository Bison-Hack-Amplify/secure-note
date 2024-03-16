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
  ImageBackground,
} from "react-native";
import { registerRootComponent } from "expo";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import styles from "./scss/Browse.scss";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export const Browse = () => {
  const navigation = useNavigation();

  const genres = [
    {
      id: "1",
      name: "Hiphop",
      image: "https://media.istockphoto.com/id/92026251/photo/hip-hop-musician.jpg?b=1&s=612x612&w=0&k=20&c=WoKtOTf7AfvCdURX_mapqnZ8lq2GiPlHF7AfO09ikpU=",
    },
    {
      id: "2",
      name: "All",
      image: "",
    },
    {
      id: "3",
      name: "R&B",
      image: "",
    },
    {
      id: "4",
      name: "Trap",
      image: "",
    },
  ];
  const [activeGenre, setActiveGenre] = useState("All");

  const artists = [
    {
      id: "1",
      name: "Daniel Reyes",
      title: "Pop producer & singer",
      samples: "20",
      follow: "Follow",
      image:
        "https://img.freepik.com/premium-photo/latin-caucasian-man-with-headphones-sitting-floor-practicing-guitar-watching-sheet-music_434738-1081.jpg",
    },
    {
      id: "2",
      name: "Michael Jacobs",
      title: "Hip Hop producer",
      samples: "47",
      follow: "Follow",
      image:
        "https://routenote.com/blog/wp-content/uploads/2019/03/Hip-Hop-producer.jpg",
    },
    {
      id: "3",
      name: "Natasha Royal",
      title: "Jazz singer",
      samples: "2",
      follow: "Following",
      image:
        "https://previews.123rf.com/images/moodboard/moodboard1304/moodboard130401065/18779375-woman-singing-on-microphone-over-colored-background.jpg",
    },

    {
      id: "4",
      name: "Michelle Carson",
      title: "Pop singer",
      samples: "15",
      follow: "Follow",
      image:
        "https://thumbs.dreamstime.com/z/portrait-happy-black-woman-singer-music-studio-19193326.jpg?ct=jpeg",
    },
    {
      id: "4",
      name: "Romeo + Juliet",
      title: "R&B Singerr",
      samples: "20",
      follow: "Following",
      image:
        "https://images.squarespace-cdn.com/content/v1/5ecbeda04215f5026a7b3d9f/a7293f56-e930-4abd-a7c4-0e1f67947c6b/3FBC8018-F81C-4D12-A44D-06C75122B552.jpeg",
    },
    {
      id: "5",
      name: "Knight Vibes",
      title: "Lofi Producer",
      samples: "29",
      follow: "Follow",
      image:
        "https://media.lofiweekly.com/wp-content/uploads/2023/10/21134746/lofi-hip-hop-producerr.jpg",
    },
    {
      id: "6",
      name: "PeterLakeMusic",
      title: "UnderGround Rapper",
      samples: "31",
      follow: "Follow",
      image: "https://sfmn.fiu.edu/wp-content/uploads/2022/05/the-den.jpg",
    },
    {
      id: "7",
      name: "Mason Carter",
      title: "Country Singer",
      samples: "51",
      follow: "Follow",
      image:
        "https://www.gannett-cdn.com/presto/2021/09/21/PNAS/86699339-3597-4291-bf84-36c844b25bc4-Willie_Jones_02.jpg",
    },
    {
      id: "6",
      name: "Jordan Ward",
      title: "R&B Singer",
      samples: "78",
      follow: "Follow",
      image:
        "https://musicdaily.com/wp-content/uploads/2023/09/Screenshot-2023-09-06-at-18.16.43-815x1024.jpg",
    },
  ];

  return (
    <SafeAreaView style={styles.browseFoundation}>
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

      <ScrollView
        horizontal={true}
        style={styles.searchBoxParent}
        // showsHorizontalScrollIndicator={false}
      >
        {genres.map((genre) => (
          <View
            style={
              genre.name != activeGenre
                ? styles.searchBoxActive
                : styles.searchBox
            }
          >
            <ImageBackground
              style={genre.name == activeGenre ? styles.genreTextActive : ""}
              source={{ uri: genre.image }}
            >
              <Text style={styles.genreText}>{genre.name}</Text>
            </ImageBackground>
          </View>
        ))}
      </ScrollView>

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

                <Text style={styles.artistSamples}>
                  {card.samples} samples available
                </Text>
                <Text style={styles.artistGenre}>{card.title}</Text>
                <Text
                  style={[
                    styles.artistFollow,
                    card.follow === "Follow"
                      ? styles.followingText
                      : styles.followText,
                  ]}
                >
                  {card.follow}
                </Text>
              </View>

              <View style={styles.artistCardButton}>
                <FontAwesome name="play" size={20} color="white" />
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
