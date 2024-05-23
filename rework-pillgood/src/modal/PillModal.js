import { useState } from "react";
import { View, Text, Pressable, TextInput } from "react-native";

export default function PillModal() {
  const [pillName, setPillName] = useState("");

  const onChangeText = (text) => {
    setPillName(text);
  };

  const searchPill = (text) => {
    console.log(text);
    onChangeText('');
    
  };

  return (
    <View className="w-80 h-96 justify-center items-center bg-green-700 rounded-lg border-solid border-black border-2 space-y-5">
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
        <Pressable className="bg-blue-500 border">
          <Text>확인</Text>
        </Pressable>

        <Pressable className="bg-red-500 border">
          <Text>취소</Text>
        </Pressable>
      </View>
    </View>
  );
}
