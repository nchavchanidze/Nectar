import React from "react";
import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import { useNavigation } from "@react-navigation/core";
import Button from "../components/Button";
import Background from "../assets/images/login/background.png";

const Signup = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={Background}
        resizeMode="cover"
        style={styles.image}
      >
        <ScrollView>
          <View style={styles.carrot}>
            <Svg
              width="49"
              height="57"
              viewBox="0 0 49 57"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M32.7212 4.7429C32.96 2.60925 31.4474 0.682598 29.3137 0.443757C27.1801 0.188993 25.2534 1.71758 25.0146 3.85122C24.728 6.2874 25.1261 9.20126 25.6356 12.1947C27.0527 12.6247 28.4221 13.2456 29.6959 13.9781C31.0652 10.7458 32.4028 7.5453 32.7212 4.7429ZM47.7045 14.1055C46.8606 12.131 44.5677 11.2394 42.5933 12.0833C39.9979 13.2138 37.307 15.4271 34.6001 17.704C35.6191 18.7071 36.5745 19.8377 37.3866 21.0637C40.4597 20.6816 43.4054 20.2198 45.6823 19.2326C47.6567 18.3568 48.5643 16.064 47.7045 14.1055ZM41.1603 3.692C39.4406 2.41818 37.0044 2.76848 35.7306 4.48813C33.788 7.09946 32.4824 11.0005 31.0652 14.8061C31.5429 15.1245 31.9888 15.443 32.4187 15.7774C32.7371 16.0321 33.0715 16.3028 33.4059 16.5735C36.6541 14.1214 40.0297 11.733 41.9723 9.12165C43.2461 7.40199 42.8799 4.96581 41.1603 3.692Z"
                fill="#53B175"
              />
              <Path
                d="M33.7722 34.8688C32.5779 36.1585 31.3041 37.3527 29.9507 38.5151C28.0559 40.1551 26.1292 41.7474 24.1707 43.276C22.0689 41.9862 20.5563 41.3334 20.3015 41.6678C20.0786 41.9703 20.9543 43.0849 22.5307 44.5339C17.2444 48.4668 11.6555 51.9379 5.6526 54.7881C4.71316 55.2339 3.72595 55.5524 2.75466 55.9027C2.4999 55.9982 2.22921 55.9982 2.11775 56.0141C0.589168 56.1893 0.127409 55.7753 0.1911 54.3741C0.382173 50.0113 1.73561 45.9191 3.13681 41.8429C3.51895 40.7283 3.91702 39.6137 4.33101 38.4991C6.44874 39.7889 7.9614 40.4576 8.21616 40.1233C8.48685 39.757 7.21303 38.2921 5.07938 36.461C6.60796 32.5122 8.3117 28.627 10.318 24.9011C14.3305 27.8787 17.8972 29.8372 18.2953 29.2958C18.6933 28.7544 15.7476 25.8724 11.6873 22.863L11.5122 22.7356C12.2128 21.5414 12.9452 20.3472 13.7254 19.1849C14.6967 17.72 15.8909 16.3825 17.0692 15.0768C18.6456 13.3412 20.6837 12.7521 22.9606 13.2616C30.2532 14.8857 35.3167 19.0734 37.7051 26.2545C38.1828 27.7194 37.7528 29.1525 37.0045 30.4741C36.4949 31.3657 35.9376 32.2097 35.3167 33.0058C31.4634 30.1875 28.1196 28.3723 27.7374 28.8818C27.3712 29.3913 30.0303 32.0186 33.7722 34.8688Z"
                fill="#F3603F"
              />
            </Svg>
          </View>

          <KeyboardAvoidingView style={{ marginTop: 100 }}>
            <View>
              <Text style={styles.title}>Sign Up</Text>
              <Text style={styles.description}>
                Enter your credentials to continue
              </Text>
            </View>
            <View style={{ marginBottom: 30 }}>
              <View style={styles.inputWrapper}>
                <Text style={styles.label}>Email</Text>
                <TextInput placeholder="Enter Email" style={styles.input} />
              </View>
              <View style={styles.inputWrapper}>
                <Text style={styles.label}>Password</Text>
                <TextInput
                  placeholder="Enter Password"
                  style={styles.input}
                  secureTextEntry
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                flexWrap: "wrap",
                alignItems: "flex-start",
                marginBottom: 20,
              }}
            >
              <Text
                style={{
                  color: "#7C7C7C",
                  fontSize: 14,
                  fontFamily: "Gilroy-SemiBold",
                }}
              >
                By continuing you agree to our{" "}
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Terms")}>
                <Text
                  style={{
                    color: "#53B175",
                    fontSize: 14,
                    fontFamily: "Gilroy-SemiBold",
                  }}
                >
                  Terms of Service{" "}
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  color: "#7C7C7C",
                  fontSize: 14,
                  fontFamily: "Gilroy-SemiBold",
                }}
              >
                and{" "}
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("PrivacyPolicy")}>
                <Text
                  style={{
                    color: "#53B175",
                    fontSize: 14,
                    fontFamily: "Gilroy-SemiBold",
                  }}
                >
                  Privacy Policy.
                </Text>
              </TouchableOpacity>
            </View>
            <Button
              title="Sign up"
              function={() => {
                navigation.navigate("Home");
              }}
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 25,
              }}
            >
              <Text
                style={{
                  color: "#181725",
                  fontSize: 14,
                  fontFamily: "Gilroy-SemiBold",
                }}
              >
                Already have an account?{" "}
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text
                  style={{
                    color: "#53B175",
                    fontSize: 14,
                    fontFamily: "Gilroy-SemiBold",
                  }}
                >
                  Sign In.
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCFCFC",
  },
  image: {
    flex: 1,
    paddingTop: 45,
    paddingHorizontal: 25,
  },
  carrot: {
    alignItems: "center",
    marginTop: 30,
  },
  title: {
    color: "#181725",
    fontSize: 26,
    fontFamily: "Gilroy-SemiBold",
    marginBottom: 10,
  },
  description: {
    color: "#7c7c7c",
    fontSize: 16,
    fontFamily: "Gilroy-Medium",
  },
  inputWrapper: {
    marginTop: 30,
  },
  label: {
    color: "#7c7c7c",
    fontSize: 16,
    fontFamily: "Gilroy-SemiBold",
    marginBottom: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#E2E2E2",
    color: "#181725",
    fontSize: 18,
    fontFamily: "Gilroy-Medium",
    paddingBottom: 20,
  },
});
