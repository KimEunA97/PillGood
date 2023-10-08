import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PillList = ({ items }) => {

  return (
    <View>
      {items.map((item, index) => (
        <Text style={styles.container} key={index}>{item}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "black",

  }
})

export default PillList;