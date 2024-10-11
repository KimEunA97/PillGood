// app/index.tsx
import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";
import { PaperProvider } from "react-native-paper";
import TodayPillPage from "@/pages/TodayPillPage";

export default function Home() {
  const router = useRouter();

  return (
    <PaperProvider>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TodayPillPage />
      </View>
    </PaperProvider>
  );
}
