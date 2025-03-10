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
import { Alert, ScrollView, StyleSheet, View } from "react-native";
import DefaultButton from "./DefaultButton";
import TimePickerComponent from "./TimePickerComponent";

interface PillModalProps {
  visible: boolean;
  closeModal: () => void; // 함수 타입 정의
}

const data = {
  header: {
    resultCode: "00",
    resultMsg: "NORMAL SERVICE.",
  },
  body: {
    pageNo: 1,
    totalCount: 4677,
    numOfRows: 30,
    items: [
      {
        entpName: "동화약품(주)",
        itemName: "활명수",
        itemSeq: "195700020",
        efcyQesitm:
          "이 약은 식욕감퇴(식욕부진), 위부팽만감, 소화불량, 과식, 체함, 구역, 구토에 사용합니다.\n",
        useMethodQesitm:
          "만 15세 이상 및 성인은 1회 1병(75 mL), 만 11세이상~만 15세미만은 1회 2/3병(50 mL), 만 8세 이상~만 11세 미만은 1회 1/2병(37.5 mL), 만 5세 이상~만 8세 미만은 1회 1/3병(25 mL), 만 3세 이상~만 5세 미만은 1회 1/4병(18.75 mL), 만 1세 이상~만 3세 미만은 1회 1/5병(15 mL), 1일 3회 식후에 복용합니다. 복용간격은 4시간 이상으로 합니다.\n",
        atpnWarnQesitm: null,
        atpnQesitm:
          "만 3개월 미만의 젖먹이는 이 약을 복용하지 마십시오.\n\n이 약을 복용하기 전에 만 1세 미만의 젖먹이, 임부 또는 임신하고 있을 가능성이 있는 여성, 카라멜에 과민증 환자 또는 경험자, 나트륨 제한 식이를 하는 사람은 의사 또는 약사와 상의하십시오.\n\n정해진 용법과 용량을 잘 지키십시오.\n\n어린이에게 투여할 경우 보호자의 지도 감독하에 투여하십시오.\n\n1개월 정도 복용하여도 증상의 개선이 없을 경우 복용을 즉각 중지하고 의사 또는 약사와 상의하십시오.\n",
        intrcQesitm: null,
        seQesitm: null,
        depositMethodQesitm:
          "습기와 빛을 피해 실온에서 보관하십시오.\n\n어린이의 손이 닿지 않는 곳에 보관하십시오.\n",
        openDe: "2021-01-29 00:00:00",
        updateDe: "2024-05-09",
        itemImage: null,
        bizrno: "1108100102",
      },
      {
        entpName: "신신제약(주)",
        itemName: "신신티눈고(살리실산반창고)(수출명:SINSINCORNPLASTER)",
        itemSeq: "195900034",
        efcyQesitm: "이 약은 티눈, 못(굳은살), 사마귀에 사용합니다. \n",
        useMethodQesitm:
          "이형지로부터 벗겨 이 약제면을 환부(질환 부위)에 대고 테이프로 고정하고 2~5일마다 교체하여 붙입니다.\n",
        atpnWarnQesitm: null,
        atpnQesitm:
          "이 약에 과민증 환자, 당뇨병, 혈액순환장애 환자는 이 약을 사용하지 마십시오.\n\n눈 주위, 점막, 감염, 염증, 발적(충혈되어 붉어짐), 자극이 있는 부위, 점, 태어날 때부터 있는 점 또는 사마귀, 털이 있는 사마귀, 생식기 부위의 사마귀에 사용하지 마십시오.\n\n이 약을 사용하기 전에 영아 및 유아, 약 또는 화장품에 과민증 환자, 신부전 환자, 임부 또는 임신하고 있을 가능성이 있는 여성 및 수유부는 의사 또는 약사와 상의하십시오.\n\n정해진 용법과 용량을 잘 지키십시오.\n\n화농(곪음)성피부염, 습윤(습기 참), 미란(짓무름)의 경우 이를 미리 치료한 후 이 약을 적용하십시오.\n\n이 약을 붙인 채로 물 속에 들어가는 경우에는 약고가 녹아서 없어질 수 있으므로 주의하십시오.\n\n어린이에게 투여할 경우 보호자의 지도 감독하에 투여하십시오.\n\n이 약은 외용으로만 사용하십시오.\n\n눈, 코, 입 및 다른 점막에 닿지 않도록 주의하여 적용하고, 만일 눈에 들어갔을 경우 충분한 양의 물로 완전히 씻어내십시오.\n\n환부(질환 부위) 이외의 피부에 닿지 않도록 주의하십시오.\n",
        intrcQesitm:
          "메토트렉세이트, 설포닐우레아, 다른 국소 적용 약물과 함께 사용 시 의사 또는 약사와 상의하십시오.\n",
        seQesitm:
          "발진, 발적(충혈되어 붉어짐), 홍반(붉은 반점), 가려움, 정상 피부에 닿았을 경우 국소 자극 반응이 나타나는 경우 사용을 즉각 중지하고 의사 또는 약사와 상의하십시오.\n\n드물게 피부자극, 접촉성 알레르기 반응 등이 나타날 수 있습니다.\n",
        depositMethodQesitm:
          "습기와 빛을 피해 보관하십시오.\n\n어린이의 손이 닿지 않는 곳에 보관하십시오.\n",
        openDe: "2021-01-29 00:00:00",
        updateDe: "2021-11-25",
        itemImage: null,
        bizrno: "1188104136",
      },
      {
        entpName: "삼진제약(주)",
        itemName: "아네모정",
        itemSeq: "195900043",
        efcyQesitm:
          "이 약은 위산과다, 속쓰림, 위부불쾌감, 위부팽만감, 체함, 구역, 구토, 위통, 신트림에 사용합니다.",
        useMethodQesitm:
          "성인 1회 2정, 1일 3회 식간(식사와 식사때 사이) 및 취침시에 복용합니다.",
        atpnWarnQesitm: null,
        atpnQesitm:
          "투석요법을 받고 있는 환자, 수유부, 만 7세 이하의 어린이, 갈락토오스 불내성, Lapp 유당분해효소 결핍증 또는 포도당-갈락토오스 흡수장애 등의 유전적인 문제가 있는 환자는 이 약을 복용하지 마십시오. 이 약을 복용하기 전에 이 약에 과민증 환자, 알레르기 체질, 알레르기 증상(발진, 충혈되어 붉어짐, 가려움 등) 경험자, 신장장애 환자, 임부 또는 임신하고 있을 가능성이 있는 여성, 나트륨 제한 식이를 하는 사람은 의사 또는 약사와 상의하십시오. 정해진 용법과 용량을 잘 지키십시오.",
        intrcQesitm:
          "위장진통ㆍ진경제, 테트라사이클린계 항생제와 함께 복용하지 마십시오.",
        seQesitm:
          "발진, 충혈되어 붉어짐, 가려움, 드물게 입이 마르는 증상, 변비 또는 설사 등이 나타나는 경우 복용을 즉각 중지하고 의사 또는 약사와 상의하십시오.",
        depositMethodQesitm:
          "습기와 빛을 피해 보관하십시오. 어린이의 손이 닿지 않는 곳에 보관하십시오.",
        openDe: "2021-01-29 00:00:00",
        updateDe: "2021-01-29",
        itemImage:
          "https://nedrug.mfds.go.kr/pbp/cmn/itemImageDownload/152035092098000085",
        bizrno: "1248531621",
      },
    ],
  },
};

interface Pill {}

export default function PillModal({ visible, closeModal }: PillModalProps) {
  const [searchPillName, setSearchPillName] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
  const [pillData, setPillData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const response = await fetch(
    //       "https://apis.data.go.kr/1471000/DrbEasyDrugInfoService/getDrbEasyDrugList?serviceKey=FZ0nYw4YlJUF%2F86azwK12YuwmjCtUMZtuoYi%2B6cVVPOtDQx%2F%2FpnqVxngJ8O5V7pBm42oFKkYVNYqitedr3Nqyw%3D%3D&pageNo=1&numOfRows=3&type=json"
    //     ); // 실제 파일 경로
    //     const data = await response.json();
    //     console.log(data.body.items);
    //     setPillData(data.body.items);
    //   } catch (error) {
    //     console.error("Error fetching data:", error);
    //   }
    // };
    // fetchData();
    setPillData(data.body.items);
  }, []);

  // 검색 리스트 선택 이벤트
  const handleSelectedData = (pillName: string) => {
    setSearchPillName(pillName);
    setCurrentStep(1);
  };

  // 검색하기 버튼 이벤트
  const searchingPillData = () => {
    setLoading(true);
    setCurrentStep(2);
  };

  // 다음으로 버튼 이벤트
  const nextButton = () => {
    // 절차.1 검색한다.
    // 절차.2 선택한다.
    // 절차.3 등록한다.
    if (searchPillName) {
      setCurrentStep(3);
    }
    if (!searchPillName) {
    }
    console.log(currentStep);
  };

  // 뒤로가기
  const prevButton = () => {
    console.log(currentStep);
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
    if (currentStep === 1) {
      closeModal();
    }
    if (currentStep === 3) {
      setCurrentStep(1);
    }
  };

  // 닫기 버튼
  const handleCloseModal = () => {
    closeModal();
    setCurrentStep(1);
    setSearchPillName("");
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
                variant="headlineSmall"
                style={{ textAlign: "center", width: "70%" }}
              >
                약을 검색하거나 직접 등록하세요!
              </Text>
              <View style={{ width: "80%" }}>
                <TextInput
                  label="약 이름 검색"
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
                <View
                  style={{
                    marginTop: 10,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {loading &&
                    pillData.map((item, index) => (
                      <View
                        style={{
                          marginBottom: 10,
                          width: "70%",
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
          <View style={{ height: "90%" }}>
            <Appbar.Header>
              <Appbar.BackAction onPress={prevButton} />
              <Appbar.Content title="알림 설정" />
            </Appbar.Header>
            <View style={styles.modalContent}>
              <TimePickerComponent />
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
