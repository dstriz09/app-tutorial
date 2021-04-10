import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

const AppCard = ({ title, subTitle, imageUrl, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </TouchableOpacity>
  );
};

export default AppCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    overflow: "hidden",
    marginBottom: 20,
    backgroundColor: colors.white,
  },
  image: {
    height: 200,
    width: "100%",
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});
