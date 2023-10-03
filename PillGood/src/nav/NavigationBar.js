import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";

function NavigationBar() {
  return (
    <View style={styles.navContainer}>
      <Pressable style={styles.boxSt}>
        <Text style={styles.text}>asd</Text>
      </Pressable>
      <Pressable style={styles.boxSt}>
        <Text style={styles.text}>asd</Text>
      </Pressable><Pressable style={styles.boxSt}>
        <Text style={styles.text}>asd</Text>
      </Pressable><Pressable style={styles.boxSt}>
        <Text style={styles.text}>asd</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  navContainer: {
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "green"
  },
  boxSt: {
    height: "100%",
    borderColor: "white",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "25%",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white"
  }
})

export default NavigationBar;