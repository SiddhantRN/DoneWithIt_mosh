import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput, StyleSheet, View } from "react-native";

import colors from "../config/colors";

function AppTextInput({ iconName, fieldwidth, ...otherProps }) {
  return (
    <View style={[styles.container, { width: fieldwidth }]}>
      {iconName && (
        <MaterialCommunityIcons name={iconName} color="#bdbdbd" size={25} />
      )}
      <TextInput style={styles.textInput} {...otherProps}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    marginVertical: 10,
    padding: 15,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  textInput: {
    marginLeft: 5,
    fontSize: 20,
    fontFamily: "Roboto",
  },
});

export default AppTextInput;
