import { useState } from "react";
import { Alert, Pressable } from "react-native";

import PillListModal from "./PillListModal";
import AlarmSetModal from "./AlarmSetModal";
import OftenPillBtn from "../components/OftenPillBtn";
import EmptyAlert from "../components/EmptyAlert";
import { Feather } from "@expo/vector-icons";
import {
  Button,
  Card,
  Dialog,
  Modal,
  PaperProvider,
  Portal,
  Provider,
  Text,
} from "react-native-paper";

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
    <Modal
      contentContainerStyle={{
        backgroundColor: "white",
        padding: 20,
        width: "100%",
      }}
      visible={visible}
      onDismiss={onClose}
    >
      <Text variant="titleLarge">This is simple dialog</Text>
      <Text variant="titleLarge">This is simple dialog</Text>
      <Text variant="titleLarge">This is simple dialog</Text>
      <Text variant="titleLarge">This is simple dialog</Text>
    </Modal>
  );
}
