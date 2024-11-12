import { useState } from "react";
import { StyleSheet } from "react-native";
import { Modal, Portal, Text } from "react-native-paper";

interface ModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function PillSearchModal({ visible, onClose }: ModalProps) {
  return (
    <Portal>
      <Modal
        style={styles.modalContainer}
        visible={visible}
        onDismiss={onClose}
      >
        <Text>asd</Text>
      </Modal>
    </Portal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "white", // 모달 배경 색상
    marginHorizontal: 40,
    borderRadius: 10, // 모서리 둥글게 처리
  },
});
