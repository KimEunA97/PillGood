import React from "react";
import { View, StyleSheet, Touchable } from "react-native";

function NavigationBar() {
  return (
    <View>
      <Touchable style={styles.container} />
    </View>
  )

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    height: 30,
    backgroundColor: "blue"
  }
})

export default NavigationBar;