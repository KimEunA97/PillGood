// app/_layout.tsx
import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ title: "오늘의 약" }} />
      <Tabs.Screen name="calendar" options={{ title: "캘린더" }} />
    </Tabs>
  );
}
