import { View, StyleSheet } from "react-native";
import { Button, Modal, Portal, useTheme, Text } from "react-native-paper";
import PillModal from "../components/PillModal";
import { useState } from "react";
import DefaultButton from "../components/DefaultButton";

export default function TodayPillPage() {
  const [modalVisible, setModalVisible] = useState<boolean>(true);

  const { colors } = useTheme();

  // 모달 열기
  const openModal = () => setModalVisible(true);

  // 모달 닫기
  const closeModal = () => setModalVisible(false);

  return (
    <View>
      <Button
        style={[styles.createBtn, { backgroundColor: colors.primary }]}
        onPress={openModal}
      >
        <Text>asd</Text>
      </Button>
      <PillModal visible={modalVisible} closeModal={closeModal} />
    </View>
  );
}

const styles = StyleSheet.create({
  createBtn: {
    width: 300,
    backgroundColor: "black",
  },
});
