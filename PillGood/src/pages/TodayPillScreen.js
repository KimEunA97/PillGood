import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Pressable, Modal, ScrollView } from "react-native";
import SearchModal from "../components/modal/searchModal";
import PillListModal from "../components/PillListModal";

export default function TodayPillScreen() {

  const [flag, setFlag] = useState(false)
  const [isModalVisible, setModalVisible] = useState(false)
  const [list, setList] = useState([]);
  const [selectModalVisible, setSelectModalVisible] = useState(false)
  //선택index 상태관리
  const [selectedItemIndex, setSelectedItemIndex] = useState([]);

  const openModal = () => {
    setModalVisible(true)
  }
  const closeModal = () => {
    setModalVisible(false)
  }
  const clearList = () => {
    setList([]);
  }
  const handleConfirm = (confirmedData) => {
    setFlag(true)
    clearList();
    setList((prevList) => [...prevList, confirmedData]);
    closeModal();
    setSelectModalVisible(true)
  }

  const handleSelctedItem = (data) => {
    // index전달 후 모달 닫힘
    setSelectedItemIndex((prevData) => [...prevData, data]);
    setSelectModalVisible(false);
  }

  // 선택 렌더링 함수
  const renderSelectedData = () => {
    if (selectedItemIndex && selectedItemIndex.length > 0) {
      return selectedItemIndex.map((data, index) => (
        <View key={index} style={styles.pillCard}>
          <Text style={styles.cardText}>{data.name}</Text>
        </View>
      ));
    }
  };

  return (

    <ScrollView>
      <View style={styles.container}>
        {renderSelectedData()}
        <Pressable style={styles.box} onPress={openModal}>
          <Text style={styles.text}>약 등록하기</Text>
        </Pressable>
        <SearchModal isVisible={isModalVisible} onClose={closeModal} confirm={handleConfirm} />

        <Modal
          transparent={true}
          visible={selectModalVisible}>
          <ScrollView>
            <View style={styles.selectListStyle}>
              {flag && list && list.length > 0 && list.map((item) => (
                <PillListModal items={item} callbackSelectedBtn={handleSelctedItem} />
              ))}
            </View>
          </ScrollView>
        </Modal>
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
    marginTop: 30,
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
    marginTop: 20,
  },
  cardText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white"
  }
})