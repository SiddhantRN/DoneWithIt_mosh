import React from "react";
import { View, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import { Image } from "react-native-expo-image-cache";

import colors from "../config/colors";

function Card({ title, subTitle, imageUrl, onPress, thumbnailUrl }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image
          tint="light"
          style={styles.image}
          preview={{ uri: thumbnailUrl }}
          uri={imageUrl}
        />
        <View style={{ margin: 10 }}>
          <Text
            numberOfLines={1}
            style={{ color: colors.black, fontSize: 20, fontWeight: "bold" }}
          >
            {title}
          </Text>
          <Text
            numberOfLines={1}
            style={{ fontSize: 15, color: colors.subTitle }}
          >
            {subTitle}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 20,
    elevation: 10,
    backgroundColor: colors.white,
    overflow: "hidden",
  },
  image: {
    height: 200,
    width: "100%",
  },
});

export default Card;
