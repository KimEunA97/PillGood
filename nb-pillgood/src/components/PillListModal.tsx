import { Button, Modal, Text, VStack } from "native-base";
import { useState } from "react";

interface ListModalProps {
  listModalVisible: boolean;
  onClose: () => void;
}

// PillListModal 컴포넌트는 사용자가 약 이름을 입력하고 검색 버튼을 눌렀을 때 등록할 약을 보여준다.
export default function PillListModal({
  listModalVisible,
  onClose,
}: ListModalProps) {
  const [choosenPillName, setChoosenPillName] = useState("");

  return (
    <Modal isOpen={listModalVisible} onClose={onClose}>
      <Modal.Content
        minWidth="300px"
        maxWidth="400px"
        height="600px"
        bgColor="cyan.600"
      >
        <Modal.CloseButton />
        <Modal.Header>등록할 약을 선택하세요</Modal.Header>
        <Modal.Body>
          <VStack alignItems={"center"}>
            <Button
              colorScheme="blue"
              onPress={() => {
                console.log("hello");
              }}
            >
              얼탱이가 없으셈
            </Button>
          </VStack>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
}
