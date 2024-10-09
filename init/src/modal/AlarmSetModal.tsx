import {
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  Modal,
  Text,
} from "@gluestack-ui/themed";
import { useState } from "react";

interface AlarmModalProps {
  alarmModalVisible: boolean;
  onClose: () => void;
}

export default function AlarmSetModal({
  alarmModalVisible,
  onClose,
}: AlarmModalProps) {
  const handleSaveToStorage = () => {
    console.log("save");
  };
  return (
    <Modal isOpen={alarmModalVisible} onClose={onClose}>
      <Modal.Content bgColor="cyan.600">
        <Modal.CloseButton />
        <Modal.Header>알람 설정하기</Modal.Header>
        <Modal.Body>
          <Heading>시간 설정</Heading>
          <Text>1시 20분</Text>
          <Heading>요일 설정</Heading>
          <Divider mb={2} />
          <HStack justifyContent="space-between">
            <Button size={"sm"}>월</Button>
            <Button size={"sm"}>화</Button>
            <Button size={"sm"}>수</Button>
            <Button size={"sm"}>목</Button>
            <Button size={"sm"}>금</Button>
            <Button size={"sm"}>토</Button>
            <Button size={"sm"}>일</Button>
          </HStack>
        </Modal.Body>
        <Modal.Footer>
          <HStack flex={1} justifyContent="space-between">
            <Button onPress={onClose}>이전으로</Button>
            <Button onPress={handleSaveToStorage}>등록하기</Button>
          </HStack>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}
