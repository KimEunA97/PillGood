import React, { useEffect, useState } from "react";
import { Modal, Text, StyleSheet, View, Pressable, TextInput } from "react-native";

function SearchModal({ isVisible, onClose, confirm }) {

  const [text, onChangeText] = useState('');

  const handleConfirm = () => {
    confirm([text]);
    onChangeText('');
    onClose();
  }

  return (
    <Modal
      transparent={true}
      visible={isVisible}
      animationType="fade"
    >

      <Pressable
        style={styles.container}>
        <View style={styles.content}>
            <Text style={styles.textStyle}>약이름</Text>
            <TextInput
              style={styles.textInputStyle}
              onChangeText={onChangeText}
              placeholder="약이름"
              placeholderTextColor={"grey"}
              value={text}/>

          <View>
            <Text style={styles.textStyle}>시간설정</Text>
          </View>

          {/* 상호작용 버튼 */}
          <View style={styles.buttonContainer}>
            <Pressable onPress={handleConfirm} style={[styles.buttonSty, { backgroundColor: "blue" }]}>
              <Text style={styles.buttonTextSty}>확인</Text>
            </Pressable>
            <Pressable onPress={onClose} style={[styles.buttonSty, { backgroundColor: "red" }]}>
              <Text style={styles.buttonTextSty}>취소</Text>
            </Pressable>
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
    flexDirection: "column",
    justifyContent : "center",
    alignItems: "center",
    width: "70%",
    height: "70%",
    backgroundColor: "#007088",
    borderRadius: 10,
  },
  textInputStyle: {
    width: "80%",
    height: "5%",
    backgroundColor: "white",
    marginTop : 10,
  },
  textStyle: {
    fontSize: 40,
    color: "white",
  },
  buttonContainer: {
    width: "80%",
    height: "20%",
    flexDirection: "row",
    margin: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonSty: {
    width: "45%",
    height: "50%",
    borderRadius: 10,
  },
  buttonTextSty: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
  }
})