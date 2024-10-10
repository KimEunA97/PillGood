import { Button } from "react-native";
import PillModal from "../modal/PillModal";
import { useState } from "react";

export default function TodayPillPage() {
  const [modalVisible, setModalVisible] = useState(true);

  return (
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
  );
}
