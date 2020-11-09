import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";

function Separator() {
  return <View style={styles.seperator} />;
}

const styles = StyleSheet.create({
  seperator: {
    height: 1,
    width: "100%",

    backgroundColor: colors.light,
  },
});

export default Separator;
