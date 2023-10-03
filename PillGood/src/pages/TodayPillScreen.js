import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";

export default function TodayPillScreen() {

  return (
    <View style={styles.container}>
      <Pressable style={styles.box}>
        <Text style={styles.text}>Press it. img section</Text>
      </Pressable>
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
    width : "60vw",
    height : "15vh",
    borderWidth: 1,
    borderColor: "white",
    justifyContent : "center",
    alignItems : "center"
  },
  text: {
    color: "white",

  }
})