import { Box, Button, Input, Modal } from "native-base";
import { useState } from "react";

interface PillModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function PillModal({ visible, onClose }: PillModalProps) {
  return (
    <Modal isOpen={visible} onClose={onClose}>
      <Modal.Content maxWidth="400px" height="600px">
        <Modal.CloseButton />
        <Modal.Header>등록할 약 검색하기</Modal.Header>
        <Modal.Body>
          <Box alignItems="center">
            <Input mx="3" placeholder="Input" w="100%" />
          </Box>
        </Modal.Body>
        <Modal.Footer>
          <Button onPress={onClose}>Close</Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}
