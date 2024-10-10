import { Button, ButtonText, Center } from "@gluestack-ui/themed";
import PillModal from "../modal/PillModal";
import { useState } from "react";

export default function TodayPillPage() {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <Center>
      <Button onPress={() => setModalVisible(true)}>
        <ButtonText>모달이 튀어나와요</ButtonText>
      </Button>
      {/* 메인 검색 모달 */}
      <PillModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </Center>
  );
}
