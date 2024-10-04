import React, { useState } from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
  Button,
} from "native-base";
import NativeBaseIcon from "./src/components/NativeBaseIcon";
import PillModal from "./src/modal/PillModal";
import PillListModal from "./src/modal/PillListModal";

// Define the config
const config = {
  useSystemColorMode: true,
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

export default function App() {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <NativeBaseProvider theme={theme}>
      <Center
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        px={4}
        flex={1}
      >
        <Button onPress={() => setModalVisible(true)}>모달이 튀어나와요</Button>
        {/* 메인 검색 모달 */}
        <PillModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
        />
      </Center>
    </NativeBaseProvider>
  );
}
