import React from "react";
import { View, Text } from "react-native"; 

const PillList = ({ items }) => {
  return (
    <View>
      {items.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
    </View>
  );
}

export default PillList;