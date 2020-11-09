import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function ListItemDeleteAction({ onPress }) {
  return (
    <View style={styles.delete}>
      <MaterialCommunityIcons
        name="trash-can"
        size={35}
        color={colors.white}
        onPress={onPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  delete: {
    backgroundColor: colors.danger,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ListItemDeleteAction;
