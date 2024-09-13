import { useState } from "react";
import { View, Text, Pressable, TextInput, Modal } from "react-native";
import SelectingPillList from "./SelectingPillList";
import getPillNameData from "../api/getPillNameData";

export default function PillModal({
  modalVisible,
  callbackCancelModal,
  callbackConfirm,
}) {

  const [pillName, setPillName] = useState("");
  const [listModalVisible, setListModalVisible] = useState(false);
  const [selectToggle, setSelectToggle] = useState(false);

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
<<<<<<< HEAD
    setSelectedPillData(data);
  };

  const handleConfirm = () => {
    // 검색 완료. 모달이 완전히 꺼지면서 컴포넌트 생성
    callbackConfirm(selectedPillData);
=======
    handleConfirm(selectedData)
  };

  const handleConfirm = (data) => {
    // 검색 완료. 모달이 꺼지면서 컴포넌트 생성
    console.log(data)
    callbackConfirm(data);
>>>>>>> 6b77ffc446d390937b87c7b234a0e783eb2736a8
  };

  return (
    <Modal
      visible={modalVisible}
      className="w-80 h-96 justify-center items-center rounded-lg border-solid border-black bg-sky-400 border-2 space-y-5"
    >
      <Text className="text-slate-950 text-2xl">모달</Text>

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
    </Modal>
  );
}
