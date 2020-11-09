import React, { Component } from "react";
import { ImageBackground, Text, View, StyleSheet, Image } from "react-native";

import AppButton from "../components/AppButton";
import colors from "../config/colors";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";
import { TouchableOpacity } from "react-native-gesture-handler";

class WelcomeScreen extends Component {
  render() {
    return (
      <ImageBackground
        source={require("../assets/background.jpg")}
        style={styles.image}
      >
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/logo-red.png")}
            style={styles.logo}
          />
          <Text>Sell what u don't need</Text>
        </View>
        <View style={styles.buttonContainer}>
          <AppButton
            title={"Login"}
            buttoncolor={colors.primary}
            onPress={() => this.props.navigation.navigate("Login")}
          />

          <AppButton
            title={"Register"}
            buttoncolor={colors.secondary}
            onPress={() => this.props.navigation.navigate("Register")}
          />
        </View>
      </ImageBackground>
    );
  }
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    flexDirection: "column",
  },
  image: {
    flex: 1,

    justifyContent: "flex-end",
    alignItems: "center",
  },
  text: {
    color: "grey",
    fontSize: 30,
    fontWeight: "bold",
  },
  logo: {
    height: 100,
    width: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  buttonContainer: {
    paddingVertical: 10,
    alignItems: "center",
    width: "100%",
  },
});
