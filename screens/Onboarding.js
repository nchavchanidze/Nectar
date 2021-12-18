import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import Svg, { Path } from "react-native-svg";
import Button from "../components/Button";
import Background from "../assets/images/onboarding/background.png";

const Onboarding = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={Background}
        resizeMode="cover"
        style={styles.image}
      >
        <Svg
          style={styles.icon}
          width="50"
          height="57"
          viewBox="0 0 50 57"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M33.8534 4.80666C34.0954 2.64506 32.5629 0.69317 30.4013 0.451201C28.2397 0.193099 26.2878 1.74171 26.0458 3.9033C25.7555 6.3714 26.1587 9.32343 26.6749 12.3561C28.1106 12.7917 29.4979 13.4208 30.7884 14.1628C32.1757 10.8882 33.5308 7.64577 33.8534 4.80666ZM49.033 14.2919C48.178 12.2916 45.8551 11.3882 43.8548 12.2432C41.2254 13.3885 38.4992 15.6308 35.7569 17.9376C36.7893 18.9538 37.7572 20.0992 38.5799 21.3413C41.6932 20.9541 44.6775 20.4863 46.9843 19.4862C48.9846 18.5989 49.9041 16.276 49.033 14.2919ZM42.403 3.74199C40.6608 2.45148 38.1927 2.80637 36.9022 4.54856C34.9342 7.19409 33.6114 11.1463 32.1757 15.0017C32.6597 15.3243 33.1113 15.6469 33.5469 15.9857C33.8695 16.2438 34.2083 16.518 34.547 16.7922C37.8378 14.308 41.2577 11.8883 43.2257 9.24277C44.5162 7.50059 44.1452 5.0325 42.403 3.74199Z"
            fill="white"
          />
          <Path
            d="M34.9181 35.3271C33.7082 36.6337 32.4177 37.8436 31.0466 39.0212C29.1269 40.6827 27.175 42.2958 25.1909 43.8444C23.0615 42.5378 21.5291 41.8764 21.271 42.2152C21.0451 42.5217 21.9324 43.6509 23.5294 45.1188C18.1738 49.1032 12.5117 52.6199 6.43015 55.5074C5.4784 55.9591 4.47826 56.2817 3.49425 56.6366C3.23615 56.7334 2.96192 56.7334 2.849 56.7495C1.30039 56.9269 0.832581 56.5075 0.897107 55.088C1.09068 50.668 2.46185 46.5222 3.8814 42.3926C4.26855 41.2634 4.67184 40.1342 5.09125 39.005C7.23672 40.3117 8.76919 40.9892 9.0273 40.6504C9.30153 40.2794 8.01102 38.7953 5.84942 36.9402C7.39803 32.9397 9.12408 29.0036 11.1566 25.2289C15.2217 28.2454 18.8351 30.2296 19.2384 29.6811C19.6417 29.1327 16.6574 26.2129 12.5439 23.1641L12.3665 23.035C13.0763 21.8252 13.8183 20.6153 14.6087 19.4377C15.5927 17.9537 16.8026 16.5986 17.9963 15.2759C19.5933 13.5175 21.6581 12.9207 23.9649 13.4369C31.3531 15.0823 36.4828 19.3248 38.9025 26.6C39.3865 28.0841 38.9509 29.5359 38.1927 30.8748C37.6765 31.7782 37.1119 32.6332 36.4828 33.4397C32.579 30.5845 29.1915 28.7455 28.8043 29.2617C28.4333 29.7779 31.1272 32.4396 34.9181 35.3271Z"
            fill="white"
          />
        </Svg>

        <Text style={styles.greeting}>Welcome</Text>
        <Text style={styles.greeting}>to our store</Text>
        <Text style={styles.secondary}>
          Get your groceries in as fast as one hour
        </Text>
        <Button
          title="Get Started"
          function={() => {
            navigation.navigate("Login");
          }}
        />
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
    paddingHorizontal: 25,
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
