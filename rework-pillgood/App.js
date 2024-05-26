import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import PillModal from "./src/modal/PillModal";
import CreateButton from "./src/CreateButton";
import { useState, useContext, createContext } from "react";

const CTX = createContext();

export default function App() {
  const [pillObj, setPillObj] = useState(null)
  return (
    <View>
      <StatusBar style="auto" />
      <View className="h-full bg-green-100 items-center justify-center">
        <CTX.Provider value={pillObj}>
          <PillModal />
          <CreateButton />
        </CTX.Provider>
      </View>
    </View>
  );
}
