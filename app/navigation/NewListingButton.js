import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function NewListingButton({ onPress }) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="plus-circle"
        size={40}
        color={colors.white}
        onPress={onPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 80,
    width: 80,
    alignItems: "center",
    borderWidth: 10,
    borderColor: colors.white,
    justifyContent: "center",
    bottom: 25,
    borderRadius: 40,
  },
});

export default NewListingButton;
