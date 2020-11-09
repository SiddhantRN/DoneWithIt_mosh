import React from "react";
import { View, Image, StyleSheet } from "react-native";

import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" size={30} color="white" />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={30}
          color="white"
        />
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  closeIcon: {
    height: 50,
    width: 50,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.black,
    top: 40,
    left: 30,
  },
  deleteIcon: {
    height: 50,
    width: 50,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.black,
    top: 40,
    right: 30,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});

export default ViewImageScreen;
