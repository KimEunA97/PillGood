import { useEffect, useState } from "react";
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
import { ScrollView, StyleSheet, View } from "react-native";
import DefaultButton from "./DefaultButton";
import PillSearchModal from "./PillSearchModal";

interface PillModalProps {
  visible: boolean;
  closeModal: () => void; // 함수 타입 정의
}

interface Pill {}

export default function PillModal({ visible, closeModal }: PillModalProps) {
  const [searchPillName, setSearchPillName] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
  const [pillData, setPillData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../data2.json"); // 실제 파일 경로
        const data = await response.json();
        console.log(data.body.items);
        setPillData(data.body.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // 검색하기 버튼 이벤트
  const searchingPillData = () => {
    setLoading(true);
    setCurrentStep(2);
  };
  const handleSelectedData = (pillName: string) => {
    setSearchPillName(pillName);
    setCurrentStep(1);
  };

  // 다음으로 버튼 이벤트
  const nextButton = () => {
    // 절차.1 검색한다.
    // 절차.2 선택한다.
    // 절차.3 등록한다.
    setCurrentStep(3);
    console.log(currentStep);
  };

  // 뒤로가기
  const prevButton = () => {
    setCurrentStep((prev) => prev - 1);
    if (currentStep === 1) {
      closeModal();
    }
  };

  const handleCloseModal = () => {
    closeModal();
    setCurrentStep(1);
  };

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={prevButton}
        contentContainerStyle={styles.modalContainer}
      >
        {currentStep === 1 && (
          <View style={{ height: "90%" }}>
            <Appbar.Header>
              <Appbar.BackAction onPress={prevButton} />
              <Appbar.Content title="약 검색하기" />
            </Appbar.Header>
            <View style={styles.modalContent}>
              <Text
                variant="labelLarge"
                style={{ textAlign: "center", width: "70%" }}
              >
                약을 검색하거나 직접 등록하세요!
              </Text>
              <View>
                <TextInput
                  label="약 이름"
                  value={searchPillName}
                  onChangeText={(text) => setSearchPillName(text)}
                  onSubmitEditing={() => console.log("key")}
                  style={{ marginBottom: 10 }}
                />
                <DefaultButton
                  text="검색하기"
                  onPress={searchingPillData}
                ></DefaultButton>
              </View>
            </View>
          </View>
        )}

        {currentStep === 2 && (
          <View style={{ height: "90%" }}>
            <Appbar.Header>
              <Appbar.BackAction onPress={prevButton} />
              <Appbar.Content title="약 선택하기" />
            </Appbar.Header>
            <View style={styles.modalContent}>
              <ScrollView>
                <View>
                  {pillData.map((item, index) => (
                    <View
                      style={{
                        marginBottom: 10,
                        width: "70%",
                        justifyContent: "center",
                      }}
                      key={index}
                    >
                      <DefaultButton
                        text={item.itemName}
                        onPress={() => handleSelectedData(item.itemName)}
                      ></DefaultButton>
                    </View>
                  ))}
                </View>
              </ScrollView>
            </View>
          </View>
        )}

        {currentStep === 3 && (
          <View>
            <Appbar.Header>
              <Appbar.BackAction onPress={prevButton} />
              <Appbar.Content title="알림 설정 " />
            </Appbar.Header>
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
