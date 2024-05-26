import { Pressable, View, Text } from "react-native";

// 약 검색 모달창 활성화
export default function CreateButton({ callbackVisible }) {
  return (
    <View className="">
      <Pressable className="bg-green-800 text-white border-2 p-4" onPress={callbackVisible}>
        <Text>모달 열기</Text>
      </Pressable>
    </View>
  );
}
