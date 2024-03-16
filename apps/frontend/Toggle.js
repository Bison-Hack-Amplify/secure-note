import React, { useState } from "react";
import { SafeAreaView, Text, View, TouchableOpacity } from "react-native";
import styles from "./scss/Toggle.scss";

export const Toggle = ({ handleToggleChange }) => {
  const [selectedOption, setSelectedOption] = useState("Following");

  const handleToggle = (option) => {
    setSelectedOption(option);
    handleToggleChange(option); // Call handleToggleChange with selected option
  };

  return (
    <SafeAreaView style={styles.Foundation}>
      <View style={styles.topContainer}>
        <TouchableOpacity
          style={styles.topButton}
          onPress={() => handleToggle("Following")}
        >
          <Text
            style={[
              styles.topButtonText,
              selectedOption === "Following" && styles.selectedButtonText,
            ]}
          >
            Following
          </Text>
          {selectedOption === "Following" && (
            <View style={[styles.underline, styles.selectedUnderline]} />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.topButton}
          onPress={() => handleToggle("Trending Artist")}
        >
          <Text
            style={[
              styles.topButtonText,
              selectedOption === "Trending Artist" && styles.selectedButtonText,
            ]}
          >
            Trending Artist
          </Text>
          {selectedOption === "Trending Artist" && (
            <View style={[styles.underline, styles.selectedUnderline]} />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.topButton}
          onPress={() => handleToggle("Events")}
        >
          <Text
            style={[
              styles.topButtonText,
              selectedOption === "Events" && styles.selectedButtonText,
            ]}
          >
            Events
          </Text>
          {selectedOption === "Events" && (
            <View style={[styles.underline, styles.selectedUnderline]} />
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
