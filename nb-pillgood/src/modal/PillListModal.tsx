import { Box, Button, IconButton, Modal, Text, VStack } from "native-base";
import { useEffect, useState } from "react";
import pillData from "../../data2.json";
import { Pressable } from "react-native";

interface ListModalProps {
  listModalVisible: boolean;
  onClose: () => void;
  onPillSelect: (pillName: string) => void;
}

interface OriginalPillData {
  atpnQesitm: string | null;
  atpnWarnQesitm: string | null;
  bizrno: string;
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

interface PillData {
  precautions: string | null;
  warning: string | null;
  businessNumber: string;
  storageMethod: string | null;
  efficacy: string | null;
  manufacturerName: string;
  drugInteractions: string | null;
  imageUrl: string | null;
  pillName: string;
  pillSeq: string;
  releaseDate: string | null;
  sideEffects: string | null;
  lastUpdated: string | null;
  usageInstructions: string | null;
}

// PillListModal 컴포넌트는 사용자가 약 이름을 입력하고 검색 버튼을 눌렀을 때 등록할 약을 보여준다.
export default function PillListModal({
  listModalVisible,
  onClose,
  onPillSelect,
}: ListModalProps) {
  const [data, setData] = useState<PillData[]>([]);

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

    const transformedData: PillData[] = pillData.body.items.map(
      (pill: OriginalPillData) => ({
        precautions: pill.atpnQesitm,
        warning: pill.atpnWarnQesitm,
        businessNumber: pill.bizrno,
        storageMethod: pill.depositMethodQesitm,
        efficacy: pill.efcyQesitm,
        manufacturerName: pill.entpName,
        drugInteractions: pill.intrcQesitm,
        imageUrl: pill.itemImage,
        pillName: pill.itemName,
        pillSeq: pill.itemSeq,
        releaseDate: pill.openDe,
        sideEffects: pill.seQesitm,
        lastUpdated: pill.updateDe,
        usageInstructions: pill.useMethodQesitm,
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
                backgroundColor: "cyan",
                borderRadius: 5,
                padding: 5,
              }}
            >
              <Text
                style={{
                  overflow: "visible",
                  textShadowColor: "white", // 그림자 색상
                  textShadowOffset: { width: 1, height: 1 }, // 그림자 오프셋
                }}
                bold
                // color={}
                ellipsizeMode="tail"
                numberOfLines={2}
              >
                {pill.pillName}
              </Text>
              <Text>{pill.manufacturerName}</Text>
            </Pressable>
          ))}
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}
