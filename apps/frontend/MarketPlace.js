import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
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
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import styles from "./scss/MarketPlace.scss";
import { useNavigation } from "@react-navigation/native";
import { Vocals } from "./Vocals";
import { Beats } from "./Beats";
import { VocalSell } from "./VocalSell";
import { BeatSell } from "./BeatSell";

export const MarketPlace = () => {
  //   const navigation = useNavigation();

  const [selectedOption, setSelectedOption] = useState("Buy");

  const handleToggle = (option) => {
    setSelectedOption(option);
  };

  const [selectedBuy, setSelectedBuy] = useState("Vocals");

  const handleBuy = () => {
    setSelectedBuy(selectedBuy === "Vocals" ? "Beats" : "Vocals");
  };

  const [selectedSell, setSelectedSell] = useState("Vocals");

  const handleSell = () => {
    setSelectedSell(selectedSell === "Vocals" ? "Beats" : "Vocals");
  };

  return (
    <SafeAreaView style={styles.mpFoundation}>
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
      <View style={styles.topContainer}>
        <TouchableOpacity
          style={styles.topButton}
          onPress={() => handleToggle("Buy")}
        >
          <Text
            style={[
              styles.topButtonText,
              selectedOption === "Buy" && styles.selectedButtonText,
            ]}
          >
            Buy
          </Text>
          {selectedOption === "Buy" && (
            <View style={[styles.underline, styles.selectedUnderline]} />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.topButton}
          onPress={() => handleToggle("Sell")}
        >
          <Text
            style={[
              styles.topButtonText,
              selectedOption === "Sell" && styles.selectedButtonText,
            ]}
          >
            Sell
          </Text>
          {selectedOption === "Sell" && (
            <View style={[styles.underline, styles.selectedUnderline]} />
          )}
        </TouchableOpacity>
      </View>

      {/* content below */}
      {selectedOption === "Buy" && (
        <>
          <View style={styles.bottomContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleBuy("Vocals")}
            >
              <Text
                style={[
                  styles.buttonText,
                  selectedBuy === "Vocals" && styles.selectedButtonText,
                ]}
              >
                Vocals
              </Text>
              {selectedBuy === "Vocals" && (
                <View style={[styles.underline, styles.selectedUnderline]} />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleBuy("Beats")}
            >
              <Text
                style={[
                  styles.buttonText,
                  selectedBuy === "Beats" && styles.selectedButtonText,
                ]}
              >
                Beats
              </Text>
              {selectedBuy === "Beats" && (
                <View style={[styles.underline, styles.selectedUnderline]} />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.dropdownContent}>
            {selectedBuy === "Vocals" && <Vocals />}
            {selectedBuy === "Beats" && <Beats />}
          </View>
        </>
      )}
      {selectedOption === "Sell" && (
        <>
          <View style={styles.bottomContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleSell("Vocals")}
            >
              <Text
                style={[
                  styles.buttonText,
                  selectedSell === "Vocals" && styles.selectedButtonText,
                ]}
              >
                Vocals
              </Text>
              {selectedSell === "Vocals" && (
                <View style={[styles.underline, styles.selectedUnderline]} />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleSell("Beats")}
            >
              <Text
                style={[
                  styles.buttonText,
                  selectedSell === "Beats" && styles.selectedButtonText,
                ]}
              >
                Beats
              </Text>
              {selectedSell === "Beats" && (
                <View style={[styles.underline, styles.selectedUnderline]} />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.dropdownContent}>
            {selectedSell === "Vocals" && <VocalSell />}
            {selectedSell === "Beats" && <BeatSell />}
          </View>
        </>
      )}
    </SafeAreaView>
  );
};
