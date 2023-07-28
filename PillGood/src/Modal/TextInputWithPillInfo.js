import React, { useState } from "react";
import { View, Text } from 'react-native'

import TextInputFlexableSize from "./TextInputFlexableSize";

export default function TextInputWithPillInfo(props) {
  const handleTextChange = (text) => {
    onChange(text)
  }
  return (
    <View style={styles.labelStyle}>
      <Text style={styles.labelTextStyle}>{props.name}</Text>
      <TextInputFlexableSize value={props.value} onChange={handleTextChange}
      />
    </View>
  );
}

const styles = {
  labelStyle: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  labelTextStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    marginRight : 20,


  },
}