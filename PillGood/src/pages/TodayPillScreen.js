import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import SearchModal from "../components/modal/searchModal";
import PillList from "../components/PillList";

export default function TodayPillScreen() {

  const [flag, setFlag] = useState(false)
  const [isModalVisible, setModalVisible] = useState(false)
  const [list, setList] = useState([]);

  const openModal = () => {
    setModalVisible(true)
  }
  const closeModal = () => {
    setModalVisible(false)
  }
  const handleConfirm = (confirmedData) => {
    setFlag(true)
    setList((prevList) => [...prevList, ...confirmedData]);
    console.log(list)
    closeModal();
  }

  return (
    <View style={styles.container}>
      <Pressable style={styles.box} onPress={openModal}>
        <Text style={styles.text}>내 약 찾아보기</Text>
      </Pressable>
      <SearchModal isVisible={isModalVisible} onClose={closeModal} confirm={handleConfirm} />
      <View style={styles.listStyle}>
        {flag && <PillList items={list} />}
      </View>
    </View >
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
  listStyle:{
    marginTop: 30,
  },
  box: {
    width: "60vw",
    height: "20vh",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "white",
    backgroundColor: "#167286",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "white",
  }
})