

import React from "react";
import { Text, View } from "react-native";

export default function BoldText(props) {



  return (
    <View style={styles.align}>
      <View style={styles.ListAllStyle}>
        <Text style={styles.customFont}>{props.name}</Text>
      </View>
    </View>
  )

}

const styles = {
  align: {
    justifyContent: "center",
    alignItems: "center",

  },
  ListAllStyle : {
    width: '80%',
    backgroundColor: '#167286',
    alignItems: 'center',
    justifyContent: 'center',
  },
  customFont: {
    fontSize: 20,
    fontWeight : "bold",
    color : "white",
    textAlign : "center"
  }
}