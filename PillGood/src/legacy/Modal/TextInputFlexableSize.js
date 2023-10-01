import React, { useState } from "react";
import { View, Text, TextInput } from 'react-native'

export default function TextInputFlexableSize({ value, onChange }) {
  const [inputHeight, setInputHeight] = useState(40); // 초기 높이 값

  const handleTextChange = (text) => {
    onChange(text);
  };

  const handleContentSizeChange = (event) => {
    const { contentSize } = event.nativeEvent;
    setInputHeight(contentSize.height);
  };

  return (
    <TextInput
      value={value}
      onChangeText={handleTextChange}
      multiline={true}
      onContentSizeChange={handleContentSizeChange}
      style={[styles.inputStyle, { height: inputHeight, fontSize : 16 }]}
    />
  );
}

const styles = {
  inputStyle: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    width: 200,
  },
};
