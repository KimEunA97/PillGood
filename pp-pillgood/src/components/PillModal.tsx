import { useState } from "react";
import { Modal, Portal, Text } from "react-native-paper";

export default function PillModal() {
  const [visible, setVisible] = useState(false);

  return (
    <Portal>
      <Modal visible={visible}>
        <Text>ㅁㄴㅇ</Text>
      </Modal>
    </Portal>
  );
}
