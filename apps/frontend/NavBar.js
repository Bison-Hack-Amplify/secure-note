import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import styles from "./scss/NavBar.scss";
import { useNavigation } from "@react-navigation/native";

const NavBar = ({ id }) => {
  const navigation = useNavigation();
  const [selectedButton, setSelectedButton] = useState("Home"); // Current button selected in Navbar

  // Handles changing the current button clicked in the NavBar
  const handleButtonPress = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <>
      <View style={styles.divider}></View>
      <View style={styles.border}>
        <View style={styles.navBar}>
          {/* Home Button */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => [
              handleButtonPress("Home"),
              navigation.navigate("Home"),
            ]}
          >
            <FontAwesome
              name="home"
              size={32}
              color="white"
              style={[
                styles.button,
                selectedButton === "Home" && styles.selectedButton,
              ]}
            />
          </TouchableOpacity>

          {/* Search Button */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => [
              handleButtonPress("Browse"),
              navigation.navigate("Browse"),
            ]}
          >
            <FontAwesome
              name="search"
              size={25}
              color="white"
              style={[
                styles.button,
                selectedButton === "Browse" && styles.selectedButton,
              ]}
            />
          </TouchableOpacity>

          {/* Browse Button */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress("MarketPlace")}
          >
            <FontAwesome5
              name="store"
              size={24}
              color="white"
              style={[
                styles.button,
                selectedButton === "MarketPlace" && styles.selectedButton,
              ]}
            />
          </TouchableOpacity>

          {/* Profile Button */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => [
              handleButtonPress("Profile"),
              navigation.navigate("Profile", {
                id,
              }),
            ]}
          >
            <FontAwesome
              name="user"
              size={27}
              color="white"
              style={[
                styles.button,
                selectedButton === "Profile" && styles.selectedButton,
              ]}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export { NavBar };
