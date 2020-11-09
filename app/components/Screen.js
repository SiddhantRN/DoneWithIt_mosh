import React from "react";
import Constants from "expo-constants";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";

function Screen({ children, color = colors.whiteS }) {
  return (
    <View style={[styles.screen, { backgroundColor: color }]}>{children}</View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
export default Screen;
