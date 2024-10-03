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
import NativeBaseIcon from "./components/NativeBaseIcon";
import PillModal from "./components/PillModal";

// // Define the config
// const config = {
//   useSystemColorMode: false,
//   initialColorMode: "dark",
// };

// // extend the theme
// export const theme = extendTheme({ config });
// type MyThemeType = typeof theme;
// declare module "native-base" {
//   interface ICustomTheme extends MyThemeType {}
// }
export default function App() {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <NativeBaseProvider>
      <Center
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        px={4}
        flex={1}
      >
        <Button onPress={() => setModalVisible(true)}>눌러보슈</Button>
        <PillModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
        />
      </Center>
    </NativeBaseProvider>
  );
}
