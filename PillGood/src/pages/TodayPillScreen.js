import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Pressable, Modal, ScrollView } from "react-native";
import SearchModal from "../components/modal/searchModal";
import PillListModal from "../components/modal/PillListModal";

export default function TodayPillScreen() {

  const [isModalVisible, setModalVisible] = useState(false)
  const [renderedPills, setRenderedPills] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);

  const openModal = () => {
    setModalVisible(true)
  }
  const closeModal = () => {
    setModalVisible(false)
  }
  const renderData = (data) => {
    if (data && data.time) {
      // `data`가 존재하고 `time` 프로퍼티가 있는 경우, 알람 시간 설정
      setSelectedTime(data.time);
    } else if (data && data.pillName) {
      // `data`가 존재하고 `pillName` 프로퍼티가 있는 경우, 약 정보 처리
      const updatedPills = [...renderedPills, data.pillName];
      setRenderedPills(updatedPills);
    }
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
        <SearchModal
          isVisible={isModalVisible} onClose={closeModal}
          callbackConfirmData={(data) => renderData(data)}
          callbackTime={(time) => renderData(time)} />
        {/* 검색결과 렌더링 */}
        {renderedPills.map((item, index) => (
          <View key={index} style={styles.selectListStyle}>
            <Text style={styles.listText}>{item}</Text>
            {selectedTime &&
              <Text style={styles.listText}>{selectedTime.toLocaleTimeString()}</Text>
            }
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