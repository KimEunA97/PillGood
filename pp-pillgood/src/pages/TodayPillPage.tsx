import { View } from "react-native";
import { Button, Modal, Portal } from "react-native-paper";
import PillModal from "../components/PillModal";

export default function TodayPillPage() {
  return (
    <View>
      <Button mode="contained">Modal Open</Button>
      <PillModal />
    </View>
  );
}
