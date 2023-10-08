import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import SearchModal from "../components/modal/searchModal";

export default function TodayPillScreen() {

  const [isModalVisible, setModalVisible] = useState(false)
  const [list, setList] = useState([]);

  const openModal = () => {
    setModalVisible(true)
  }
  const closeModal = () => {
    setModalVisible(false)
  }
  const handleConfirm = (confirmedData) => {
    console.log("confirmedData:", confirmedData);
    console.log("list:", list);
    setList(confirmedData);
    closeModal();
  }

  useEffect(() => {
    // list가 변경될 때마다 실행됩니다.
    console.log("list has changed:", list);
  }, [list]); // list가 변경될 때만 useEffect가 실행됩니다.

  return (
    <View style={styles.container}>
      <Pressable style={styles.box} onPress={openModal}>
        <Text style={styles.text}>Press it. img section</Text>
      </Pressable>
      <SearchModal isVisible={isModalVisible} onClose={closeModal} confirm={handleConfirm} />
      {list.map((items) => (
        <PillList items={items} key={items.id} />
      ))}
    </View >
  )

}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
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