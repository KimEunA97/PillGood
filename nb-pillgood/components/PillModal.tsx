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

interface PillModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function PillModal({ visible, onClose }: PillModalProps) {
  return (
    <Modal isOpen={visible} onClose={onClose}>
      <Modal.Content maxWidth="400px" height="600px" bgColor="cyan.600">
        <Modal.CloseButton />
        <Modal.Header>등록할 약 검색하기</Modal.Header>
        <Modal.Body>
          <VStack space={3} alignItems={"center"}>
            <Text color="white" fontSize="lg" mb={1}>
              약 이름
            </Text>
            <Input mx="3" placeholder="약 이름" w="90%" bgColor="light.100" />
            <Text color="white" fontSize="lg" mb={1}>
              제조사명
            </Text>
            <Input placeholder="그려" bgColor="light.100" mx="3" w="90%" />
          </VStack>
        </Modal.Body>
        <Modal.Footer>
          <HStack flex={1} justifyContent="space-between">
            <Button onPress={() => console.log("등록")}>등록</Button>
            <Button onPress={onClose}>Close</Button>
          </HStack>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}
