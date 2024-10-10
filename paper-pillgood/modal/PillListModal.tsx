import { Box, Button, IconButton, Modal, Text, VStack } from "native-base";
import { useEffect, useState } from "react";
import pillData from "../../data2.json";
import { Pressable } from "react-native";
import { PillItem } from "../api/type/types";

interface ListModalProps {
  listModalVisible: boolean;
  onClose: () => void;
  onPillSelect: (pillName: string) => void;
}

interface OriginalPillData {
  atpnQesitm: string | null;
  atpnWarnQesitm: string | null;
  depositMethodQesitm: string | null;
  efcyQesitm: string | null;
  entpName: string;
  intrcQesitm: string | null;
  itemImage: string | null;
  itemName: string;
  itemSeq: string;
  openDe: string | null;
  seQesitm: string | null;
  updateDe: string | null;
  useMethodQesitm: string | null;
}

// PillListModal 컴포넌트는 사용자가 약 이름을 입력하고 검색 버튼을 눌렀을 때 요청을 시도한다. 모달이 나타나 검색어와 관련된 요소를 세로로 나열해 보여준다. 이후 원하는 약을 선택하면 등록할 묶음에 포함할 수 있다.
export default function PillListModal({
  listModalVisible,
  onClose,
  onPillSelect,
}: ListModalProps) {
  const [data, setData] = useState<PillItem[]>([]);

  const handlePillClick = (pillName: string) => {
    onPillSelect(pillName);
  };

  useEffect(() => {
    // 로컬 JSON 파일을 fetch로 가져오기
    // fetch("/data.json")
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error("Failed to fetch data");
    //     }
    //     return response.json();
    //   })
    //   .then((originalData: OriginalPillData[]) => {
    //     // 키 이름을 변경하는 매핑 함수 사용
    //     const transformedData: PillData[] = originalData.map((pill) => ({
    //       precautions: pill.atpnQesitm,
    //       warning: pill.atpnWarnQesitm,
    //       businessNumber: pill.bizrno,
    //       storageMethod: pill.depositMethodQesitm,
    //       efficacy: pill.efcyQesitm,
    //       manufacturerName: pill.entpName,
    //       drugInteractions: pill.intrcQesitm,
    //       imageUrl: pill.itemImage,
    //       productName: pill.itemName,
    //       productSeq: pill.itemSeq,
    //       releaseDate: pill.openDe,
    //       sideEffects: pill.seQesitm,
    //       lastUpdated: pill.updateDe,
    //       usageInstructions: pill.useMethodQesitm,
    //     }));

    //     // 변환된 데이터를 상태에 저장
    //     setData(transformedData);
    //   })
    //   .catch((error) => console.error("Error fetching data:", error));

    const transformedData: PillItem[] = pillData.body.items.map(
      (pill: OriginalPillData) => ({
        /*
          precautions: 주의 사항
          warning: 경고 사항
          storageMethod: 저장 방법
          efficacy: 효능
          drugInteractions: 약물 간 상호 작용
          imageUrl: 이미지 URL
          releaseDate: 출시일
          sideEffects: 부작용
          lastUpdated: 마지막 업데이트 날짜
          usageInstructions: 사용 지침
        */
        company: pill.entpName,
        pillName: pill.itemName,
        precautions: pill.atpnQesitm,
        warning: pill.atpnWarnQesitm,
        storageMethod: pill.depositMethodQesitm,
        efficacy: pill.efcyQesitm,
        drugInteractions: pill.intrcQesitm,
        imageUrl: pill.itemImage,
        sequenceId: pill.itemSeq,
        sideEffects: pill.seQesitm,
        lastUpdated: pill.updateDe,
        usage: pill.useMethodQesitm,
        ingredients: pill.intrcQesitm,
      })
    );

    setData(transformedData);
  }, []);

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
          {data.map((pill, index) => (
            <Pressable
              onPress={() => handlePillClick(pill.pillName)}
              style={{
                width: "100%",
                marginBottom: 10,
                backgroundColor: "#005db4",
                borderRadius: 5,
                padding: 5,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  // textShadowColor: "white", // 그림자 색상
                  // textShadowOffset: { width: 1, height: 1 }, // 그림자 오프셋
                }}
                bold
                color={"white"}
                ellipsizeMode="tail"
                numberOfLines={2}
              >
                {pill.pillName}
              </Text>
              <Text color={"light.300"} italic>
                {pill.company}
              </Text>
            </Pressable>
          ))}
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}
