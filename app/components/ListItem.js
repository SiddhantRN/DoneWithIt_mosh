import React from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
  Text,
} from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ListItem({
  img,
  title,
  subtitle,
  onPress,
  renderRight,
  showChevrons,
}) {
  return (
    <Swipeable renderRightActions={renderRight}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {img && <Image style={styles.image} source={img}></Image>}
          <View style={{ marginLeft: 10, justifyContent: "center", flex: 1 }}>
            <Text style={styles.title} numberOfLines={1}>
              {title}
            </Text>
            <Text style={styles.subTitle} numberOfLines={2}>
              {subtitle}
            </Text>
          </View>
          {showChevrons ? (
            <MaterialCommunityIcons
              name="chevron-right"
              color="#bdbdbd"
              size={20}
            />
          ) : null}
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  title: {
    fontSize: 20,
    color: colors.black,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 15,
    color: "#9e9e9e",
  },
});
export default ListItem;
