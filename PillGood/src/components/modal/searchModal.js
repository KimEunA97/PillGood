import React, { useEffect, useState } from "react";
import { Modal, Text, StyleSheet, View, Pressable, TextInput } from "react-native";
import PillListModal from "../PillListModal";

function SearchModal({ isVisible, onClose }) {

  const [text, onChangeText] = useState('');
  const [searchingData, setSearchingData] = useState([]);
  const [toggle, setToggle] = useState(false)

  const [innerModalVisible, setInnerModalVisible] = useState(false)

  const handleSearchButton = () => {
    setToggle(true);
    setInnerModalVisible(true)
    setSearchingData(["아니"])
    // setSearchingData((prevData) => [...prevData, text]);
    console.log(("searchingData is", searchingData))
    onChangeText('');
  }

  const handleConfirm = () => {
    console.log("확인 누름 =", text)
    onChangeText('');
    setSearchingData([]);
    onClose();
  }

  const handleCancel = () => {
    console.log("취소 누름")
    onChangeText('');
    setSearchingData([]);
    onClose();
  }

  const searchComplete = (data) => {
    setToggle(false);
    console.log(data.name, "completeData");
    onChangeText(data.name);
  }

  return (
    <Modal
      transparent={true}
      visible={isVisible}
      animationType="fade"
    >
      {!toggle && <Pressable
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
                value={text}
                multiline />
              {/* 검색 */}
              <Pressable style={styles.SearchButtonSty}
                onPress={handleSearchButton}>
                <Text style={styles.SearchText}>검색</Text>
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
            <Pressable onPress={handleCancel} style={[styles.buttonSty, { backgroundColor: "red" }]}>
              <Text style={styles.buttonTextSty}>취소</Text>
            </Pressable>
          </View>
        </View>
      </Pressable>}

      {/* 검색 버튼을 누르면 토글 true 되고 선택지 렌더링 */}
      {toggle && searchingData && Array.isArray(searchingData) && searchingData.length > 0 && searchingData.map((searchingData, index) => (
        <View style={styles.innerModalContainer}>
          <PillListModal key={index} items={searchingData} callbackSelectedBtn={(data) => searchComplete(data)} />
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
    alignItems: "center",
    borderWidth: 1,
  },
  SearchButtonSty: {
    width: 100,
    height: 50,
    flexDirection: "row",
    backgroundColor: "green",
  },
  SearchText: {
    fontSize: 30,
    textAlign: "center",
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
})