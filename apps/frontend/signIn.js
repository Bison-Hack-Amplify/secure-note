import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, TextInput, Touchable, TouchableOpacity } from "react-native";
import { registerRootComponent } from "expo";
import styles from "./scss/signIn.scss";
import { useNavigation } from "@react-navigation/native";

export const SignIn = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.signInFoundation}>
      <View style={styles.signInLogo}>
        <Text>SecureNote</Text>
      </View>

      <View style={styles.signInForm}>
        <View style={styles.inputContainerEmail}>
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            placeholderTextColor="white"
          />
        </View>
        <View style={styles.inputContainerPassword}>
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            placeholderTextColor="white"
          />
        </View>

        <View style={styles.forgotPasswordWrapper}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </View>

        <TouchableOpacity style={styles.Button} onPress={() => {
                navigation.navigate("Home");
              }}>
          <Text style={styles.Text}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signUpOption}>
        <Text style={styles.Question}>Don't have an account?</Text>
        <Text style={styles.Register}>Register Now!</Text>
      </View>
    </SafeAreaView>
  );
};
