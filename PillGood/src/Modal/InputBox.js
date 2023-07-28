import React, { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";

export default function InputBox({ value }) {

  const [text, setText] = useState(value);

  const onChangeText = (text) => {
    setText(text);
  };

  return (
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      value={text}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: 150,
    borderWidth: 1,
    backgroundColor: "white",
    borderColor: 'gray',
    padding: 5,
    marginTop: 10,
    fontSize: 20,
    textAlign: "center",
    alignSelf: 'center' // 중앙 정렬 추가
  },
});
