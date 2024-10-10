import {
  Box,
  Button,
  Divider,
  FormControl,
  HStack,
  Icon,
  IconButton,
  Input,
  Modal,
  Text,
  VStack,
  WarningOutlineIcon,
} from "native-base";
import { useState } from "react";
import { Alert, Pressable } from "react-native";

import PillListModal from "./PillListModal";
import AlarmSetModal from "./AlarmSetModal";
import OftenPillBtn from "../components/OftenPillBtn";
import EmptyAlert from "../components/EmptyAlert";
import { Feather } from "@expo/vector-icons";

interface PillModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function PillModal({ visible, onClose }: PillModalProps) {
  const [listModalVisible, setListModalVisible] = useState(false);
  const [selectedPill, setSelectedPill] = useState<string[]>([]);

  const [EmptyAlertShow, setEmptyAlertShow] = useState(false);
  const [alarmModalVisible, setAlarmModalVisible] = useState(false);

  // 선택 시 리스트 생성
  const handlePillClick = (pill: string) => {
    setSelectedPill((prevSelectedPills) => [...prevSelectedPills, pill]);
  };
  // 생성된 요소 삭제 함수
  const handleSelectedPillRemove = (index: number) => {
    setSelectedPill((prevSelectedPills) =>
      prevSelectedPills.filter((_, i) => i !== index)
    );
  };

  // 다음으로 버튼 클릭 시
  const nextButtonClick = () => {
    if (selectedPill.length == 0) {
      setEmptyAlertShow(true);
    } else {
      setAlarmModalVisible(true);
    }
  };

  // 리스트 모달 선택 함수
  const handlePillSelect = (pillName: string) => {
    setSelectedPill((prevPills) => [...prevPills, pillName]);
    setListModalVisible(false); // 모달 닫기
  };

  return (
    <Modal isOpen={visible} onClose={onClose}>
      <Modal.Content
        minWidth="300px"
        maxWidth="400px"
        height="600px"
        bgColor="cyan.600"
      >
        <Modal.CloseButton />
        <Modal.Header>약 이름 검색하기</Modal.Header>
        <Modal.Body w="100%">
          <VStack space={3} alignItems={"center"}>
            <Text color="white" fontWeight="bold" fontSize="lg" mb={1}>
              어떤 약을 드시고 계신가요?
            </Text>
            <HStack alignItems="center">
              <Input
                mx="3"
                placeholder="약 이름을 입력해 주세요"
                w="80%"
                bgColor="light.100"
              />
              <Button
                colorScheme="blue"
                onPress={() => {
                  setListModalVisible(true);
                }}
              >
                검색
              </Button>
            </HStack>
            <Divider />

            <Text color="white" fontWeight="bold" fontSize="lg" mt={2} mb={1}>
              자주 찾는 약
            </Text>
            <OftenPillBtn ChoosenOftenPill={handlePillClick} />
            {/* 사람들이 주로 먹는 약을 간편하게 선택할 수 있도록 예시로 추가 : 비타민, 오메가3, 칼숨 등*/}
            {/* 사용자가 선택한 컴포넌트가 추가되는 부분 */}
            <Divider />
            <Text color="white" fontWeight="bold" fontSize="lg">
              등록할 약
            </Text>
            <Text fontSize="xs" color="white">
              눌러서 삭제하세요!
            </Text>
            <HStack alignItems="center">
              {selectedPill.map((pill, index) => (
                <Box flexDirection={"row"} key={index} mr={2}>
                  <Pressable
                    style={{
                      backgroundColor: "#005db4",
                      borderRadius: 7,
                      padding: 7,
                    }}
                    onPress={() => handleSelectedPillRemove(index)}
                  >
                    <Text color="white">{pill}</Text>
                  </Pressable>
                  {/* <IconButton
                    icon={
                      <Icon as={Feather} name="x" size="sm" color="light.100" />
                    } // X 아이콘 사용
                    borderRadius="full" // 동그란 모양 버튼
                    colorScheme="black" // 버튼 색상
                    variant="solid"
                    onPress={() => handleSelectedPillRemove(index)}
                  ></IconButton> */}
                </Box>
              ))}
            </HStack>
          </VStack>
        </Modal.Body>
        <Modal.Footer>
          {/* 상호작용 버튼 */}
          <HStack flex={1} justifyContent="space-between">
            <Button colorScheme="danger" onPress={onClose}>
              닫기
            </Button>
            <Button colorScheme="teal" onPress={nextButtonClick}>
              시간 설정
            </Button>
          </HStack>
        </Modal.Footer>
      </Modal.Content>
      {/* 리스트 모달 */}
      <PillListModal
        onPillSelect={handlePillSelect}
        listModalVisible={listModalVisible}
        onClose={() => setListModalVisible(false)}
      />
      {/* 약을 하나도 선택하지 않을 시 추가하라는 얼럿 */}
      {EmptyAlertShow && (
        <EmptyAlert onClose={() => setEmptyAlertShow(false)} />
      )}
      {/* 추가된 약이 하나 이상이고, 시간 설정 버튼이 눌리면(true) => 알람 설정 모달이 열림. */}
      {selectedPill.length > 0 && alarmModalVisible && (
        <AlarmSetModal
          alarmModalVisible={alarmModalVisible}
          onClose={() => setAlarmModalVisible(false)}
        />
      )}
    </Modal>
  );
}
