// app/index.tsx
import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";
import { PaperProvider } from "react-native-paper";
import TodayPillPage from "@/pages/TodayPillPage";

export default function Today() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TodayPillPage />
    </View>
  );
}
