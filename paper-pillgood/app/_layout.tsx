// app/_layout.tsx
import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="profile/index" options={{ title: "Profile" }} />
      <Tabs.Screen name="settings/index" options={{ title: "Settings" }} />
    </Tabs>
  );
}
