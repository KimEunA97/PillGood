import { config } from "@gluestack-ui/config";
import { Box, GluestackUIProvider, Text } from "@gluestack-ui/themed";
import { ScrollView } from "react-native";
import Gradient from "./assets/Icons/Gradient";
import DocumentData from "./assets/Icons/DocumentData";
import LightBulbPerson from "./assets/Icons/LightbulbPerson";
import Rocket from "./assets/Icons/Rocket";
import Logo from "./assets/Icons/Logo";
import TodayPillPage from "./src/pages/TodayPillPage";
export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <Home />
    </GluestackUIProvider>
  );
}
const Home = () => {
  return <Container />;
};
const FeatureCard = ({ iconSvg: IconSvg, name, desc }: any) => {
  return (
    <Box
      flexDirection="column"
      borderWidth={1}
      borderColor="$borderDark700"
      $web-flex={1}
      m="$2"
      p="$4"
      rounded="$md"
    >
      <Box alignItems="center" display="flex" flexDirection="row">
        {/* <Image source={iconSvg} alt="document" width={22} height={22} /> */}
        <Text>
          <IconSvg />
        </Text>
        <Text fontSize={22} color="$white" fontWeight="500" ml="$2">
          {name}
        </Text>
      </Box>
      <Text color="$textDark400" mt="$2">
        {desc}
      </Text>
    </Box>
  );
};
const Container = () => {
  return (
    <Box flex={1} backgroundColor="$black">
      <ScrollView
        style={{
          height: "100%",
        }}
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        <TodayPillPage />
      </ScrollView>
    </Box>
  );
};
