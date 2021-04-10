import React, { useEffect } from "react";
import { StyleSheet, FlatList, Platform } from "react-native";

import Screen from "../components/Screen";
import AppCard from "../components/AppCard";
import colors from "../config/colors";
import routes from "../navigation/routes";
import listingsApi from "../api/listings";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";

const ListingsScreen = ({ navigation }) => {
  const { request: loadListings, data: listings, error, loading } = useApi(
    listingsApi.getListings
  );

  useEffect(() => {
    loadListings(1, 2, 3);
  }, []);

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>Couldn't retrieve the listings.</AppText>
          <AppButton title="Retry" onPress={loadListings} />
        </>
      )}
      <ActivityIndicator visible={loading} />
      <FlatList
        data={listings}
        keyExtractor={(listings) => listings.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <AppCard
            title={item.title}
            subTitle={`$${item.price}`}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: Platform.OS === "android" ? 10 : 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
