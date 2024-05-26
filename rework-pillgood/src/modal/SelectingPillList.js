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
import getPillNameData from "../api/getPillNameData";

const SelectingPillList = ({ visible, setVisible, callbackSelectedData }) => {
  const [loading, setLoding] = useState(true);
  const [pillData, setPillData] = useState(null);

  useEffect(() => {
    if (visible) {
      fetchPillData();
    }
  }, [visible]);

  const handleData = (pillData) => {
    console.log("리스트선택 : ", pillData);
    callbackSelectedData(pillData);
  };

  const fetchPillData = async () => {
    console.log(data);
    /*
    1. 결과값 확인
    2. 결과값에 따른 조건부 컴포넌트 렌더링
    */
    try {
      const resultData = data;
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
        <View className="w-80 h-96 bg-gray-700 rounded-lg justify-center items-center p-4">
          {loading ? (
            <Text>Loading...</Text>
          ) : (
            <ScrollView className="h-full">
              {pillData.body.items.map((items, index) => (
                <Pressable
                  key={index}
                  onPress={() => handleData(items.itemName)}
                >
                  <Text className="text-sky-50">{items.itemName}</Text>
                </Pressable>
              ))}
            </ScrollView>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default SelectingPillList;
