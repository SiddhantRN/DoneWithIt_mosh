import React, { useState, useEffect } from "react";
import { FlatList, View, Text } from "react-native";
import Constants from "expo-constants";

import listingsApi from "../api/listings";
import routes from "../navigation/routes";
import Card from "../components/Card";
import colors from "../config/colors";
import AppButton from "../components/AppButton";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";

function ListingsScreen({ navigation }) {
  const { data: listings, error, loading, request: loadListings } = useApi(
    listingsApi.getListings
  );

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <>
      <ActivityIndicator visible={loading} />
      <View
        style={{
          flex: 1,
          backgroundColor: colors.light,
        }}
      >
        {error && (
          <>
            <Text style={{ color: colors.black, textAlign: "center" }}>
              {" "}
              Couldn't connect to the server try again nigger
            </Text>
            <AppButton
              buttoncolor={colors.primary}
              onPress={loadListings}
              title={"Retry"}
            />
          </>
        )}
        <FlatList
          data={listings}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <Card
              imageUrl={item.images[0].url}
              title={item.title}
              subTitle={item.price}
              thumbnailUrl={item.images[0].thumbnailUrl}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            />
          )}
        />
      </View>
    </>
  );
}

export default ListingsScreen;
