import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MyAccountScreen from "../screens/MyAccountScreen";
import MessageScreen from "../screens/MessageScreen";

const Stack = createStackNavigator();

const AccountNavigator = () => {
  return (
    <Stack.Navigator mode="card">
      <Stack.Screen name="Account" component={MyAccountScreen}></Stack.Screen>
      <Stack.Screen name="Messages" component={MessageScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AccountNavigator;
