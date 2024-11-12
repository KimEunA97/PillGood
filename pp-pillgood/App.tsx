import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import {
  BottomNavigation,
  configureFonts,
  MD3LightTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import { DefaultTheme } from "react-native-paper";
import TodayPillPage from "./src/pages/TodayPillPage";

const fontConfig = {
  fontFamily: "BMJUA",
};

export default function App() {
  const theme = {
    ...MD3LightTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "#356562",
      accent: "#03dac4",
      background: "#f6f6f6",
      text: "#000000",
    },
    fonts: configureFonts({ config: fontConfig }),
  };

  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <TodayPillPage />
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
