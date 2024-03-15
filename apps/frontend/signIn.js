import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, TextInput } from "react-native";
import { registerRootComponent } from "expo";
import styles from "./scss/signIn.scss";

export const signIn = () => {
  return (
    <SafeAreaView style={styles.signInFoundation}>
      <View style={styles.signInLogo}>
        <Text>SecureNote</Text>
      </View>

      <View style={styles.signInForm}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} placeholder="Email" />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} placeholder="Password" />
        </View>
      </View>
    </SafeAreaView>
  );
};
