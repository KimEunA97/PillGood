import React, { useEffect, useState } from "react";
import { Modal, Text, StyleSheet, View, Pressable, TextInput } from "react-native";

function SearchModal({ isVisible, onClose, confirm }) {

  const [text, onChangeText] = useState('');
  const [pillName, setPillName] = useState([]);

  const handleConfirm = () => {
    // console.log("text", text)
    let textArr = [text];
    setPillName(textArr)
    confirm(pillName);
  }

  // useEffect(() => {
  //   console.log("mount", pillName)
  //   if(pillName>0){
  //     setPillName(text)
  //   }
  //   return console.log("unmount",pillName)
  // },)

  return (
    <Modal
      transparent={true}
      visible={isVisible}
      animationType="fade"
    >

      <Pressable
        style={styles.container}
      >
        <View style={styles.content}>

          <Text style={styles.textStyle}>약이름</Text>
          <TextInput
            style={styles.textInputStyle}
            onChangeText={onChangeText}
            placeholder="약이름"
            placeholderTextColor={"grey"}
            value={text}
          />

          {/* 상호작용 버튼 */}
          <View style={{ width: 200, height: 100, flexDirection: "row", margin: 10, }}>
            <Pressable onPress={handleConfirm} style={{ width: "50%", height: "30%", backgroundColor: "red" }} />
            <Pressable onPress={onClose} style={{ width: "50%", height: "30%", backgroundColor: "blue" }} />
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
    width: "80%",
    height: "5%",
    backgroundColor: "white"
  },
  textStyle: {
    fontSize: 50,
    color: "white",
  }

})