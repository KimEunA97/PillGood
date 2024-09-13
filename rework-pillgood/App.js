import { StatusBar } from "expo-status-bar";
import { Pressable, ScrollView, Text, View } from "react-native";
import PillModal from "./src/modal/PillModal";
import CreateButton from "./src/components/CreateButton";
import { useState, useContext, createContext } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

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
    setAppModalVisible(false);
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
    <SafeAreaProvider>
      <View className="flex-1">
        <StatusBar style="auto" />
        <CTX.Provider value={pillObj}>
          <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
              {/* 선택한 약 */}
              <View className="flex-1 bg-green-100 justify-center items-center">
                {components.map((data, index) => (
                  <ScrollView
                    key={index}
                    contentContainerStyle={{ flexGrow: 1 }}
                  >
                    <View className="justify-center items-center bg-green-700 m-4 p-4 space-y-4">
                      <Text className="text-white font-extrabold text-xl">
                        {data.itemName}
                      </Text>
                      <View className="border border-white w-80" />
                      <Text className="text-lg text-white font-bold">
                        {data.entpName}
                      </Text>
                      <Text className="text-white">{data.useMethodQesitm}</Text>
                    </View>
                  </ScrollView>
                ))}
                {/* 모달 활성화 버튼 */}
                <CreateButton
                  text="모달 열기"
                  callbackVisible={handleCreateButtonClick}
                />
              </View>
            </ScrollView>
            {/* 모달 컴포넌트 */}
            {appModalVisible ? (
              <PillModal
                modalVisible={appModalVisible}
                callbackConfirm={handleData}
                callbackCancelModal={handleCancelModal}
              />
            ) : null}
          </SafeAreaView>
        </CTX.Provider>
      </View>
    </SafeAreaProvider>
  );
}
