import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import Separator from "../components/Separator";
import Options from "../components/Options";
import colors from "../config/colors";
import useAuth from "../auth/useAuth";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: "Messages",
  },
];

function MyAccountScreen({ navigation }) {
  const { user, logOut } = useAuth();

  return (
    <Screen color={colors.light}>
      <View style={{ backgroundColor: colors.white, marginVertical: 20 }}>
        <ListItem
          img={require("../assets/mosh.jpg")}
          title={user.name}
          subtitle={user.email}
        />
      </View>

      <View style={{ backgroundColor: colors.white }}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <Options
              iconName={item.icon.name}
              iconColor={item.icon.backgroundColor}
              text={item.title}
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
          ItemSeparatorComponent={Separator}
        />
      </View>
      <View style={{ backgroundColor: colors.white, marginTop: 20 }}>
        <Options
          iconName={"logout"}
          iconColor={"#ffe66d"}
          text={"Log Out"}
          onPress={() => logOut()}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default MyAccountScreen;
