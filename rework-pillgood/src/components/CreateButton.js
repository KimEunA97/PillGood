import { Pressable, View, Text } from "react-native";

// 약 검색 모달창 활성화
export default function CreateButton({ callbackVisible, text }) {
  return (
    <View className="">
      <Pressable
        className="bg-green-800 text-white border-2 p-4"
        onPress={callbackVisible}
      >
        <Text className="text-2xl text-white">{text}</Text>
      </Pressable>
    </View>
  );
}
