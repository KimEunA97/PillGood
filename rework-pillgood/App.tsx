import TodayPillPage from "@/src/pages/TodayPillPage";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "./global.css";

import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <GluestackUIProvider>
      <View style={styles.container}>
        <TodayPillPage />
      </View>
    </GluestackUIProvider>
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
