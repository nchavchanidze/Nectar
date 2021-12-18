import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import Onboarding from "./screens/Onboarding";

export default function App() {
  const [isLoaded] = useFonts({
    "Gilroy-SemiBold": require("./assets/fonts/Gilroy-SemiBold.ttf"),
    "Gilroy-Medium": require("./assets/fonts/Gilroy-Medium.ttf"),
  });

  if (!isLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <StatusBar style="inverted" />
        <Onboarding />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
