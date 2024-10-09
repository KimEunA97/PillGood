import React, { Children, createContext, useContext, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TodayPillPage from "./src/pages/TodayPillPage";
import PillCalendar from "./src/pages/PillCalendar";
import { StateProvider } from "./src/context/PillContext";
import {
  GluestackUIProvider,
  GluestackUIStyledProvider,
} from "@gluestack-ui/themed";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "light",
  fonts: {
    heading: "Roboto",
    body: "Roboto",
    mono: "Courier New",
  },
};

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <StateProvider config={config}>
      <GluestackUIProvider>{Children}</GluestackUIProvider>
    </StateProvider>
  );
}
