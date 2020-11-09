import React from "react";
import { View, StyleSheet, Text } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";
import { useNetInfo } from "@react-native-community/netinfo";
import Constants from "expo-constants";
function OfflineNotice(props) {
  const netInfo = useNetInfo();
  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false) {
    return (
      <View style={styles.container}>
        <Text style={{ color: colors.white }}>No Internet Connection</Text>
      </View>
    );
  }
  return null;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 50,
    alignItems: "center",

    textAlign: "center",
    width: "100%",
    top: Constants.statusBarHeight,
  },
});

export default OfflineNotice;
