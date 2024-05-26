import { Pressable, View, Text } from "react-native";

// 약 검색 모달창 활성화
export default function CreateButton({ callbackVisible }) {
  return (
    <View className="">
      <Pressable
        className="bg-white border-2"
        onPress={callbackVisible}
      >
        <Text>숲 </Text>
      </Pressable>
    </View>
  );
}
