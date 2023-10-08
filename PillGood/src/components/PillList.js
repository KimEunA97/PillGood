import React from "react";
import { View, Text } from "react-native";

const PillList = ({ items }) => {

  const itemList = Array.isArray(items) ? items : [];
  return (
    <View>
      {itemList.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
    </View>
  );
}

export default PillList;