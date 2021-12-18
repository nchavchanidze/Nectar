import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import Button from "../components/Button";
import Background from "../assets/images/onboarding/background.png";
import Icon from "../assets/images/onboarding/icon.png";

const Onboarding = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={Background}
        resizeMode="cover"
        style={styles.image}
      >
        <Image source={Icon} style={styles.icon} />
        <Text style={styles.greeting}>Welcome</Text>
        <Text style={styles.greeting}>to our store</Text>
        <Text style={styles.secondary}>
          Get your groceries in as fast as one hour
        </Text>
        <Button title="Get Started" />
      </ImageBackground>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 90,
  },
  icon: {
    width: 50,
    marginBottom: 35,
  },
  greeting: {
    color: "#fff",
    fontSize: 48,
    fontFamily: "Gilroy-SemiBold",
  },
  secondary: {
    color: "#FCFCFC",
    fontSize: 16,
    fontFamily: "Gilroy-Medium",
    opacity: 0.7,
    marginBottom: 40,
  },
});
