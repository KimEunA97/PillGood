import { Box, Button, Modal } from "native-base";
import { useState } from "react";

interface AlarmModalProps {
  alarmModalVisible: boolean;
  onClose: () => void;
}

export default function AlarmSetModal({
  alarmModalVisible,
  onClose,
}: AlarmModalProps) {
  return (
    <Modal isOpen={alarmModalVisible} onClose={onClose}>
      <Modal.Content
        minWidth="300px"
        maxWidth="400px"
        height="600px"
        bgColor="cyan.600"
      >
        <Modal.CloseButton />
        <Modal.Header>알림 받을 시간 설정하기</Modal.Header>
        <Modal.Body>
          <div>호잇</div>
          <div>호잇</div>
          <div>호잇</div>
          <div>호잇</div>
          <div>호잇</div>
          <div>호잇</div>
        </Modal.Body>
        <Modal.Footer>
          <Button onPress={onClose}>이전으로</Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}
