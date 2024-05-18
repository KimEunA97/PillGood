import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet, Text, FlatList, ScrollView } from "react-native";

export default function PillDetailScreen() {

  return (
    <View style={styles.container}>
      <View style={styles.box}>

        <Text style={styles.text}>타이레놀</Text>

        <View style={styles.middleBox}>
          <Text>z</Text>
          <Text>이미지</Text>
          <Text>c</Text>
        </View>

        <ScrollView>
          <View style={styles.bottomBox}>
            <Text style={styles.text}>주의사항</Text>
            <Text style={styles.detailText}>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione pariatur nostrum vel, dicta sunt quod cupiditate rem facilis dolore eligendi voluptate ullam voluptatum, perferendis inventore itaque saepe voluptates quasi possimus.   Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione pariatur nostrum vel, dicta sunt quod cupiditate rem facilis dolore eligendi voluptate ullam voluptatum, perferendis inventore itaque saepe voluptates quasi possimus.</Text>
          </View>
        </ScrollView>
      </View>
    </View>
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
    padding: 20,
    width: "80vw",
    height: "80vh",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "white",
    backgroundColor: "#167286",
    alignItems: "center"
  },
  middleBox: {
    margin: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  bottomBox: {
    height: "70%",
    alignItems: "center",
    margin: 10
  },
  text: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold"
  },
  detailText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold"
  }
})