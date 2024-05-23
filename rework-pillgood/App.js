import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import PillModal from "./src/modal/PillModal";
import CreateButton from "./src/CreateButton";

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <View className="h-full bg-green-100 items-center justify-center">
        <PillModal />
        <CreateButton/>
      </View>
    </View>
  );
}
