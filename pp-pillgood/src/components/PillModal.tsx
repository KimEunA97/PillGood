import { useState } from "react";
import { Button, Modal, Portal, Props, Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import DefaultButton from "./DefaultButton";

interface PillModalProps {
  visible: boolean;
  closeModal: () => void; // 함수 타입 정의
}

export default function PillModal({ visible, closeModal }: PillModalProps) {
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={closeModal}
        contentContainerStyle={styles.modalContainer}
      >
        <View style={styles.modalContent}>
          <Text>모달 내용</Text>
          <DefaultButton text="닫기" onPress={closeModal} />
        </View>
      </Modal>
    </Portal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 0.8,
    backgroundColor: "white", // 모달 배경 색상
    padding: 20,
    marginHorizontal: 40,
    borderRadius: 10, // 모서리 둥글게 처리
  },
  modalContent: {
    alignItems: "center", // 모달 내용 가운데 정렬
    justifyContent: "center",
  },
});
