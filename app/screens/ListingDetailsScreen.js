import React from "react";
import { Image, View, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import Constants from "expo-constants";

function ListingDetailsScreen({ route }) {
  const listing = route.params;
  return (
    <View style={styles.container}>
      <Image source={{ uri: listing.images[0].url }} style={styles.image} />
      <AppText>{listing.title}</AppText>
      <AppText>${listing.price}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  image: {
    height: 300,
    width: "100%",
  },
});
export default ListingDetailsScreen;
