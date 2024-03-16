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
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleToggle("Buy")}
        >
          <Text
            style={[
              styles.buttonText,
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
          style={styles.button}
          onPress={() => handleToggle("Sell")}
        >
          <Text
            style={[
              styles.buttonText,
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
        <View>
          <TouchableOpacity
            onPress={handleBuy}
            style={[
              styles.dropdownToggleVocals,
              selectedBuy === "Vocals" &&
                styles.selectedDropdownToggleVocals,
            ]}
          >
            <Text style={styles.dropdownText}>{selectedBuy}</Text>
          </TouchableOpacity>
          <View style={styles.dropdownContent}>
            {selectedBuy === "Vocals" && (
              <View>
                {/* Content for Vocals */}
                <Text style={styles.dropdownText}>
                  Vocals content goes here
                </Text>
              </View>
            )}
            {selectedBuy === "Beats" && (
              <View>
                {/* Content for Beats */}
                <Text style={styles.dropdownText}>Beats content goes here</Text>
              </View>
            )}
          </View>
        </View>
      )}
      {selectedOption === "Sell" && (
        <View>{/* Content to display when "Sell" is selected */}</View>
      )}
    </SafeAreaView>
  );
};
