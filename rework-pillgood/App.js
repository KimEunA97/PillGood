import { StatusBar } from "expo-status-bar";
import { Pressable, ScrollView, Text, View } from "react-native";
import PillModal from "./src/modal/PillModal";
import CreateButton from "./src/CreateButton";
import { useState, useContext, createContext } from "react";
import { useTailwind } from "nativewind";

const CTX = createContext();

export default function App() {
  const [pillObj, setPillObj] = useState(null);
  const [components, setComponents] = useState([]);
  const [appModalVisible, setAppModalVisible] = useState(false);

  // 선택 완료
  const handleData = (data) => {
    console.log(data, "데이터");
    setPillObj(data);
    setComponents((prevComponents) => [...prevComponents, data]);
  };

  // 생성버튼 : 모달 열기
  const handleCreateButtonClick = () => {
    setAppModalVisible(true);
  };

  // 모달 취소
  const handleCancelModal = () => {
    setAppModalVisible(false);
  };

  return (
    <View className="flex-1">
      <StatusBar style="auto" />
      <CTX.Provider value={pillObj}>
        <View className="flex-1 bg-green-100 items-center justify-center">
          {appModalVisible && (
            <PillModal
              modalVisible={appModalVisible}
              callbackConfirm={handleData}
              callbackCancelModal={handleCancelModal}
            />
          )}
          {components.map((data, index) => (
            <ScrollView key={index}>
              <Text>{data.entpName}</Text>
            </ScrollView>
          ))}
          <CreateButton callbackVisible={handleCreateButtonClick} />
        </View>
      </CTX.Provider>
    </View>
  );
}
