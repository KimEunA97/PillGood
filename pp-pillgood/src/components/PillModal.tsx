import { useState } from "react";
import {
  Appbar,
  Button,
  FAB,
  Modal,
  Portal,
  Props,
  Text,
  TextInput,
  useTheme,
} from "react-native-paper";
import { StyleSheet, View } from "react-native";
import DefaultButton from "./DefaultButton";
import PillSearchModal from "./PillSearchModal";

interface PillModalProps {
  visible: boolean;
  closeModal: () => void; // 함수 타입 정의
}

export default function PillModal({ visible, closeModal }: PillModalProps) {
  const [searchPillName, setSearchPillName] = useState("");
  const [currentStep, setCurrentStep] = useState(1);

  const nextButton = () => {
    if (currentStep !== 2) {
      setCurrentStep((prev) => prev + 1);
    }
    console.log(currentStep);
  };
  const handleCloseModal = () => {
    setCurrentStep(1);
    closeModal();
  };

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={handleCloseModal}
        contentContainerStyle={styles.modalContainer}
      >
        {currentStep === 1 && (
          <View style={{ height: "90%" }}>
            <Appbar.Header>
              <Appbar.BackAction onPress={handleCloseModal} />
              <Appbar.Content title="약 등록하기" />
            </Appbar.Header>
            <View style={styles.modalContent}>
              <Text variant="labelLarge">약 이름</Text>
              <TextInput
                label="약 이름"
                value={searchPillName}
                onChangeText={(text) => setSearchPillName(text)}
                onSubmitEditing={() => console.log("key")}
              />

              <TextInput
                label="약 이름"
                value={searchPillName}
                onChangeText={(text) => setSearchPillName(text)}
              ></TextInput>
            </View>
          </View>
        )}

        {currentStep === 2 && (
          <View style={{ height: "90%" }}>
            <Appbar.Header>
              <Appbar.BackAction onPress={handleCloseModal} />
              <Appbar.Content title="약 선택하기" />
            </Appbar.Header>
            <View style={styles.modalContent}>
              <Text variant="labelLarge">약 이름</Text>
            </View>
          </View>
        )}

        <View style={styles.buttonContainer}>
          <DefaultButton
            backgroundColor="blue"
            text="다음으로"
            onPress={nextButton}
          />
          <DefaultButton
            backgroundColor="red"
            text="닫기"
            onPress={handleCloseModal}
          />
        </View>
      </Modal>
    </Portal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 0.8,
    backgroundColor: "white", // 모달 배경 색상
    marginHorizontal: 40,
    borderRadius: 10, // 모서리 둥글게 처리
  },
  modalContent: {
    height: "80%",
    alignItems: "center", // 모달 내용 가운데 정렬
    justifyContent: "space-evenly",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    paddingHorizontal: 20,
  },
});
