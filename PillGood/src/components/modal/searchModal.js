import React, { useState } from "react";
import { Modal, Text, StyleSheet, View, TouchableWithoutFeedback, Pressable, TextInput } from "react-native";

function SearchModal({ isVisible, onClose }) {

  const [text, onChangeText] = useState('');

  //내부를 눌러도 닫히지 않는 함수

  return (

    <Modal
      transparent={true}
      presentationStyle={"fullScreen"}
      visible={isVisible}
      animationType="fade"
    >

      <Pressable
        style={styles.container}
      >
        <View style={styles.content}>

          <Text style={styles.textStyle}>asdasdasd</Text>
          <TextInput
            style={styles.textInputStyle}
            onChangeText={onChangeText}
            value={text}
          />
          {/* 상호작용 버튼 */}
          <View style={{ flexDirection: "row", margin: 10, }}>
            <Pressable onPress={onClose} style={{ width: "50%", height: "30%", backgroundColor: "red" }} />
            <Pressable onPress={onClose} style={{ width: 100, height: 100, backgroundColor: "blue" }} />
          </View>

        </View>
      </Pressable>
    </Modal >
  )
}

export default SearchModal;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    height: "70%",
    backgroundColor: "#007088",
    borderRadius: 10,

  },
  textInputStyle: {
    backgroundColor: "white"
  },
  textStyle: {
    fontSize: 50,
    color: "white",
  }

})