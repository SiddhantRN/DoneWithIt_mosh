import React from "react";
import { StyleSheet, Text } from "react-native";

function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;

  return <Text style={styles.error}>{error}</Text>;
}

const styles = StyleSheet.create({
  error: {
    color: "#c62828",
    fontSize: 14,
    marginTop: 3,
    marginLeft: 10,
  },
});

export default ErrorMessage;
