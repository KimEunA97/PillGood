import React, { createContext, useContext, useState } from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TodayPillPage from "./src/pages/TodayPillPage";
import PillCalendar from "./src/pages/PillCalendar";
import { AppStorageData } from "./src/api/type/types";

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

// // extend the theme
export const theme = extendTheme({ config });
// type MyThemeType = typeof theme;
// declare module "native-base" {
//   interface ICustomTheme extends MyThemeType {}
// }

const Tab = createBottomTabNavigator();
const StateContext = createContext<AppStorageData | undefined>(undefined);

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="오늘의 약">
          <Tab.Screen name="오늘의 약" component={TodayPillPage} />
          <Tab.Screen name="일정" component={PillCalendar} />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
// 커스텀 훅을 통해 컨텍스트 사용
export const useAppState = (): AppStorageData => {
  const context = useContext(StateContext);
  if (!context)
    throw new Error("useAppState must be used within a StateProvider");
  return context;
};
