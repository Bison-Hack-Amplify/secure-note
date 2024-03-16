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
import styles from "./scss/VocalSell.scss";
import { useNavigation } from "@react-navigation/native";

export const VocalSell = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.Foundation}>
      <ScrollView>
        <View style={styles.info}>
        <Image
            style={styles.Box}
            source={{
              uri: "https://www.creativefabrica.com/wp-content/uploads/2023/06/04/Old-School-Rap-Music-Album-Cover-71330763-1.png",
            }}
          />
          <Text style={styles.Title}>DC Freestyles</Text>
          <Text style={styles.Genres}>Genres(s): Rap,Trap</Text>
          <Text style={styles.Price}>Price: $33.50</Text>
        </View>

        <View style={styles.description}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.descriptionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor
            sit amet consectetur adipiscing elit pellentesque habitant morbi.
            Volutpat commodo sed egestas egestas fringilla phasellus faucibus
            scelerisque eleifend. Mauris sit amet massa vitae tortor condimentum
            lacinia quis. Odio ut enim blandit volutpat maecenas volutpat
            blandit aliquam. Elit at imperdiet dui accumsan sit amet nulla.
            Varius duis at consectetur lorem. Nam libero justo laoreet sit amet
            cursus. Amet consectetur adipiscing elit pellentesque. Placerat duis
            ultricies lacus sed turpis tincidunt. Consectetur purus ut faucibus
            pulvinar elementum integer enim neque. Magna eget est lorem ipsum
            dolor sit amet. Duis at consectetur lorem donec massa sapien
            faucibus. Amet volutpat consequat mauris nunc congue nisi vitae. Sed
            vulputate mi sit amet mauris commodo quis.
          </Text>
        </View>
        <TouchableOpacity style={styles.Button}>
          <Text style={styles.Text}>Sell</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
