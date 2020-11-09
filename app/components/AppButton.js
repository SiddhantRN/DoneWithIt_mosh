import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

import colors from "../config/colors";

function AppButton({ title, buttoncolor, onPress, ...otherprops }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: buttoncolor }]}
      onPress={onPress}
      {...otherprops}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: "90%",
    borderRadius: 30,
    marginTop: 10,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.white,
  },
});
export default AppButton;
