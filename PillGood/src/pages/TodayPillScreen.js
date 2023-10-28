import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Pressable, Modal, ScrollView } from "react-native";
import SearchModal from "../components/modal/searchModal";
import PillListModal from "../components/modal/PillListModal";

export default function TodayPillScreen() {

  const [isModalVisible, setModalVisible] = useState(false)
  const [renderedList, setRenderedList] = useState([]);


  const openModal = () => {
    setModalVisible(true)
  }
  const closeModal = () => {
    setModalVisible(false)
  }
  const renderData = (data) => {
    // 기존 리스트에 새로 추가
    const updatedList = [...renderedList, data];
    setRenderedList(updatedList); // 데이터 설정
  };

  return (

    <ScrollView style={{ height: "100%" }}>
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <Pressable style={styles.box} onPress={openModal}>
            <Text style={styles.text}>약 등록하기</Text>
          </Pressable>
        </View>
        {/* 검색창 */}
        <SearchModal isVisible={isModalVisible} onClose={closeModal} callbackConfirmData={(data) => renderData(data)} />
        {/* 검색결과 렌더링 */}
        {renderedList.map((item, index) => (
          <View key={index} style={styles.selectListStyle}>
            <Text style={styles.listText}>{item}</Text>
          </View>
        ))}

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  selectListStyle: {

    maxWidth: 350,
    marginTop: 30,
    backgroundColor: "#007088",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "white"
  },
  listText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
    color: "white",
  },
  box: {
    width: 300,
    height: 200,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "white",
    backgroundColor: "#167286",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold"
  },
  pillCard: {
    width: 300,
    height: 200,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "white",
    backgroundColor: "#167286",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  cardText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white"
  }
})