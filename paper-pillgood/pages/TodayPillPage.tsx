import { Button, View } from "react-native";
import PillModal from "../modal/PillModal";
import { useState } from "react";

export default function TodayPillPage() {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <View>
      {/* <Button onPress={() => setModalVisible(true)}>모달이 튀어나와요</Button> */}
      {/* 메인 검색 모달 */}
      <PillModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
}
