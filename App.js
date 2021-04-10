import React from "react";
import { Image, View, StyleSheet } from "react-native";
import AppCard from "./app/components/AppCard";
import Screen from "./app/components/Screen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import MyAccountScreen from "./app/screens/MyAccountScreen";
import TestScreen from "./app/screens/TestScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import AuthNavigator from "./app/navigation/AuthNavigator";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./app/navigation/AppNavigator";
import navigationTheme from "./app/navigation/navigationTheme";

export default function App() {
  // return <WelcomeScreen />;
  // return <ViewImageScreen />;
  return <TestScreen />;
  // return (
  //   <View
  //     style={{
  //       backgroundColor: "#f8f4f4",
  //       padding: 20,
  //       paddingTop: 100,
  //     }}
  //   >
  //     <AppCard
  //       title="Red jacket for sale"
  //       subTitle="$100"
  //       image={require("./app/assets/jacket.jpg")}
  //     />
  //   </View>
  // );
  // return <ListingDetailsScreen />;
  // return <MessagesScreen />;
  // return <MyAccountScreen />;
  // return <ListingsScreen />;
  // return (
  //   <Screen>
  //     <ListItem
  //       title="My Title"
  //       subTitle="My Subtitle"
  //       ImageComponent={<Icon name="email" />}
  //     />
  //   </Screen>
  // );
  // return <LoginScreen />;
  // return <RegisterScreen />;
  // return <ListingEditScreen />;
  // return <AuthNavigator />;
  // return (
  //   <NavigationContainer theme={navigationTheme}>
  //     <AppNavigator />
  //   </NavigationContainer>
  // );
  // return (
  //   <NavigationContainer theme={navigationTheme}>
  //     <AuthNavigator />
  //   </NavigationContainer>
  // );
}
