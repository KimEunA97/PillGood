import {
  Box,
  Button,
  FormControl,
  HStack,
  Input,
  Modal,
  Text,
  VStack,
  WarningOutlineIcon,
} from "native-base";
import { useState } from "react";
import PillListModal from "./PillListModal";

interface PillModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function PillModal({ visible, onClose }: PillModalProps) {
  const [listModalVisible, setListModalVisible] = useState(false);

  return (
    <Modal isOpen={visible} onClose={onClose}>
      <Modal.Content maxWidth="400px" height="600px" bgColor="cyan.600">
        <Modal.CloseButton />
        <Modal.Header>약 알림 등록</Modal.Header>
        <Modal.Body>
          <VStack space={3} alignItems={"center"}>
            <Text color="white" fontSize="lg" mb={1}>
              약 이름
            </Text>
            <HStack>
              <Input mx="3" placeholder="약 이름" w="60%" bgColor="light.100" />
              <Button
                colorScheme="blue"
                onPress={() => {
                  setListModalVisible(true);
                }}
              >
                검색
              </Button>
            </HStack>
            <Text color="white" fontSize="lg" mb={1}>
              제조사명
            </Text>
            <Input placeholder="그려" bgColor="light.100" mx="3" w="90%" />
          </VStack>
        </Modal.Body>
        <Modal.Footer>
          <HStack flex={1} justifyContent="space-between">
            <Button
              colorScheme="teal"
              onPress={() => {
                console.log("등록");
              }}
            >
              등록
            </Button>
            <Button
              colorScheme="danger"
              onPress={() => {
                console.log("닫기");
              }}
            >
              닫기
            </Button>
          </HStack>
        </Modal.Footer>
      </Modal.Content>
      <PillListModal
        listModalVisible={listModalVisible}
        onClose={() => setListModalVisible(false)}
      />
    </Modal>
  );
}
