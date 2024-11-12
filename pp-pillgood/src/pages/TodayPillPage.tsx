import { View } from "react-native";
import { Button, Modal, Portal } from "react-native-paper";
import PillModal from "../components/PillModal";
import { useState } from "react";

export default function TodayPillPage() {
  const [modalVisible, setModalVisible] = useState<boolean>(true);

  // 모달 열기
  const openModal = () => setModalVisible(true);

  // 모달 닫기
  const closeModal = () => setModalVisible(false);

  return (
    <View>
      <Button onPress={openModal} mode="contained">
        Modal Open
      </Button>
      <PillModal visible={modalVisible} closeModal={closeModal} />
    </View>
  );
}
