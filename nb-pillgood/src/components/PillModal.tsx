import {
  Box,
  Button,
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
import PillListModal from "./PillListModal";
import OftenPillBtn from "./OftenPillBtn";
import { Feather } from "@expo/vector-icons";

interface PillModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function PillModal({ visible, onClose }: PillModalProps) {
  const [listModalVisible, setListModalVisible] = useState(false);
  const [selectedPill, setSelectedPill] = useState<string[]>([]);

  // 선택 시 리스트 생성
  const handlePillClick = (pill: string) => {
    setSelectedPill((prevSelectedPills) => [...prevSelectedPills, pill]);
  };
  // 생성된 요소 삭제 함수
  const handlePillRemove = (pill: string) => {
    setSelectedPill((prevSelectedPills) =>
      prevSelectedPills.filter((item) => item !== pill)
    );
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
        <Modal.Body>
          <VStack space={3} alignItems={"center"}>
            <Text color="white" fontSize="lg" mb={1}>
              어떤 약을 드시고 계신가요?
            </Text>
            <HStack>
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
            <Text color="white" fontSize="lg" mb={1}>
              자주 찾는 약
            </Text>
            <OftenPillBtn ChoosenOftenPill={handlePillClick} />
            {/* 사람들이 주로 먹는 약을 간편하게 선택할 수 있도록 예시로 추가 : 비타민, 오메가3, 칼숨 등*/}
            {/* 사용자가 선택한 컴포넌트가 추가되는 부분 */}
            {selectedPill.map((pill) => (
              <Box>
                <HStack alignItems="center">
                  <Button
                    colorScheme="darkBlue"
                    onPress={() => handlePillRemove(pill)}
                  >
                    <Text color="white">{pill}</Text>
                  </Button>
                  <IconButton
                    icon={
                      <Icon as={Feather} name="x" size="sm" color="light.100" />
                    } // X 아이콘 사용
                    ml={2}
                    borderRadius="full" // 동그란 모양 버튼
                    colorScheme="black" // 버튼 색상
                    variant="solid"
                    onPress={() => handlePillRemove(pill)}
                  ></IconButton>
                </HStack>
              </Box>
            ))}
          </VStack>
        </Modal.Body>
        <Modal.Footer>
          <HStack flex={1} justifyContent="space-between">
            <Button colorScheme="danger" onPress={onClose}>
              닫기
            </Button>
            <Button
              colorScheme="teal"
              onPress={() => {
                console.log("등록");
              }}
            >
              다음으로
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
