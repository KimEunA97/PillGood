import { useEffect, useState } from "react";
import {
  View,
  Text,
  Modal,
  Pressable,
  ScrollView,
  ActivityIndicatorComponent,
} from "react-native";
import data from "../../data.json";
import data2 from "../../data2.json";
import getPillNameData from "../api/getPillNameData";

const SelectingPillList = ({ visible, setVisible, callbackSelectedData }) => {
  const [loading, setLoding] = useState(true);
  const [pillData, setPillData] = useState(null);

  useEffect(() => {
    if (visible) {
      // 모달이 켜지면 fetch
      fetchPillData();
    }
  }, [visible]);

  const handleData = (pillData) => {
    console.log("리스트선택 : ", pillData);
    callbackSelectedData(pillData);
  };

  const handleCancel = (event) => {
    console.log("선택 취소");
    setVisible(false);
  };

  const fetchPillData = async () => {
    console.log(data2);
    /*
    1. 결과값 확인
    2. 결과값에 따른 조건부 컴포넌트 렌더링 
    => 선택 리스트 모달은 count > 1 일 시에만 나타남.
    */
    try {
      const resultData = data2;
      setPillData(resultData);
      setLoding(false);
    } catch (error) {
      console.log(error);
      setLoding(false);
    }
  };

  return (
    <Modal visible={visible}>
      <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
        <Text className="text-white p-4 text-4xl">약 이름 선택하기</Text>
        <View className="w-80 h-5/6 bg-gray-700 rounded-lg justify-center items-center p-6">
          {loading ? (
            <Text>Loading...</Text>
          ) : (
            <ScrollView className="h-full">
              {pillData.body.items.map((items, index) => (
                <Pressable
                  key={index}
                  onPress={() => handleData(items.itemName)}
                >
                  <Text className="text-white border-2 rounded-lg m-2 p-4 bg-teal-800 text-lg font-bold">
                    {items.itemName}
                  </Text>
                </Pressable>
              ))}
            </ScrollView>
          )}
          <View>
            <Pressable onPress={handleCancel} className="bg-blue-500 w-1/2 p-2">
              <Text className="text-white">취소</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SelectingPillList;
