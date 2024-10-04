import { Box, Button, Modal, Text, VStack } from "native-base";
import { useState } from "react";
import pillData from "../../data2.json";

interface ListModalProps {
  listModalVisible: boolean;
  onClose: () => void;
}

interface pill {
  data: string[];
}

// PillListModal 컴포넌트는 사용자가 약 이름을 입력하고 검색 버튼을 눌렀을 때 등록할 약을 보여준다.
export default function PillListModal({
  listModalVisible,
  onClose,
}: ListModalProps) {
  const [choosenPillName, setChoosenPillName] = useState("");
  // const [data, setData] = useState<pill>(pillData.pills);

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
                console.log("data", data);
              }}
            >
              PILL
            </Button>
          </VStack>
        </Modal.Body>
      </Modal.Content>
      <Modal.Footer>
        {choosenPillName && (
          <Box mt={4}>
            <Text fontSize="lg" color="white">
              선택된 약: {choosenPillName}
            </Text>
          </Box>
        )}
      </Modal.Footer>
    </Modal>
  );
}
