import { useState } from "react";
import { View, Text, Pressable, TextInput, Modal } from "react-native";
import SelectingPillList from "./SelectingPillList";
import getPillNameData from "../api/getPillNameData";

export default function PillModal({
  modalVisible,
  callbackCancelModal,
  callbackConfirm,
}) {
  console.log("modalvisible : ", modalVisible);

  const [pillName, setPillName] = useState("");
  const [listModalVisible, setListModalVisible] = useState(false);
  const [selectToggle, setSelectToggle] = useState(false);
  const [selectedPillData, setSelectedPillData] = useState(null);

  const onChangeText = (text) => {
    setPillName(text);
  };

  // 검색 완료 => 데이터 가져오기 + 선택 리스트 열림
  const searchPill = (text) => {
    // 입력 칸 초기화
    onChangeText("");
    // 데이터 가져오기 : get 요청
    setPillName(text);

    // 셀렉트리스트 열기
    setSelectToggle(!selectToggle);
    setListModalVisible(true);
  };

  const handleSelectedData = (selectedData) => {
    // 선택 완료되면 리스트 모달 닫힘.
    setListModalVisible(false);
    // 사용자가 선택한 약 이름 입력칸에 할당
    setPillName(selectedData.itemName);
  };

  const handleConfirm = (data) => {
    // 검색 완료. 모달이 꺼지면서 컴포넌트 생성
    setSelectedPillData(data);
    callbackConfirm(selectedPillData);
  };

  return (
    <View
      visible={modalVisible}
      className="flex-1 absolute w-80 h-96 justify-center items-center bg-green-700 rounded-lg border-solid border-black border-2 space-y-5"
    >
      <Text className="text-slate-950">모달</Text>

      <TextInput
        className="bg-slate-50 border"
        placeholder="약 입력"
        onChangeText={onChangeText}
        value={pillName}
        multiline
      />

      <Pressable className="bg-gray-50" onPress={searchPill}>
        <Text>약 검색하기</Text>
      </Pressable>

      <View className="flex-row space-x-20">
        <Pressable className="bg-blue-500 border" onPress={handleConfirm}>
          <Text>확인</Text>
        </Pressable>

        <Pressable className="bg-red-500 border">
          <Text onPress={callbackCancelModal}>취소</Text>
        </Pressable>
      </View>

      {selectToggle && (
        <SelectingPillList
          pillName={pillName}
          visible={listModalVisible}
          setVisible={setListModalVisible}
          callbackSelectedData={handleSelectedData}
        />
      )}
    </View>
  );
}
