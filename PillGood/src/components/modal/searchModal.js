import React, { useEffect, useState } from "react";
import { Modal, Text, StyleSheet, View, Pressable, TextInput } from "react-native";
import PillListModal from "../PillListModal";

function SearchModal({ isVisible, onClose }) {

  const [text, onChangeText] = useState('');
  const [searchingData, setSearchingData] = useState([]);
  const [toggle, setToggle] = useState(false)


  const [innerModalVisible, setInnerModalVisible] = useState(false)

  const handleSearchModal = () => {
    setToggle(true);
    setInnerModalVisible(true)
    setSearchingData([text]);
    console.log(typeof(searchingData))
    onChangeText('');
  }

  const handleConfirm = () => {
    console.log("확인 누름")
    onChangeText('');
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
          <View style={styles.pillContent}>
            <Text style={styles.textStyle}>약이름</Text>
            <View style={styles.pillSearchBar}>
              <TextInput
                style={styles.textInputStyle}
                onChangeText={onChangeText}
                placeholder="약이름"
                placeholderTextColor={"grey"}
                value={text} />
              {/* 검색 */}
              <Pressable style={styles.buttonSty}
                onPress={handleSearchModal}>
                <Text>검색</Text>
              </Pressable>
            </View>
          </View>

          <View>
            <Text style={[styles.textStyle, { marginTop: 10 }]}>시간설정</Text>
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

      {toggle && searchingData && Array.isArray(searchingData) && searchingData.length > 0 && searchingData.map((searchingData) => (
        <View style={styles.innerModalContainer}>
          <PillListModal items={searchingData} />
        </View>
      ))}

    </Modal >

  )
}

export default SearchModal;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
    height: "70%",
    backgroundColor: "#007088",
    borderRadius: 10,
    borderWidth: 1,

  },
  pillContent: {
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#007088",
    borderRadius: 10,
    borderWidth: 1,

  },
  pillSearchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "green",
    borderWidth: 1,

  },
  textInputStyle: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "white",
    marginTop: 10,
    borderWidth: 1,

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
  },
  innerModalContainer: {
    flex: 1,
  }
})