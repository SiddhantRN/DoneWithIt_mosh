import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

function AppText({ children, textcolor = "dodgerblue" }) {
  return <Text style={[styles.text, { color: textcolor }]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    margin: 5,
    fontSize: 18,
  },
});

export default AppText;
