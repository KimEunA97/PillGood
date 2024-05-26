import { StatusBar } from "expo-status-bar";
import { Pressable, ScrollView, Text, View } from "react-native";
import PillModal from "./src/modal/PillModal";
import CreateButton from "./src/CreateButton";
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
              <View className="fixed flex-1 bg-green-100 justify-center items-center">
                {components.map((data, index) => (
                  <ScrollView
                    key={index}
                    contentContainerStyle={{ flexGrow: 1 }}
                  >
                    <View className="justify-center items-center bg-green-50">
                      <Text>{data.itemName}</Text>
                      <Text>{data.entpName}</Text>
                    </View>
                  </ScrollView>
                ))}
                <CreateButton callbackVisible={handleCreateButtonClick} />
              </View>
            </ScrollView>
            {appModalVisible && (
              <PillModal
                modalVisible={appModalVisible}
                callbackConfirm={handleData}
                callbackCancelModal={handleCancelModal}
              />
            )}
            {/* </View> */}
          </SafeAreaView>
        </CTX.Provider>
      </View>
    </SafeAreaProvider>
  );
}
