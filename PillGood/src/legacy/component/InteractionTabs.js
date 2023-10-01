import React from "react";
import DropdownMenu from "./pullDown";
import { View, Text } from "react-native";


function Interation() {

  return (

    <View style={styles.container}>
      <Text style={styles.border}>리스트</Text>
      <Text style={styles.border}>앨범</Text>
      <DropdownMenu></DropdownMenu>
      <Text style={styles.border}>편집</Text>
      <Text style={styles.border}>추가</Text>
    </View>

  )

}

const styles = {

  container: {

    flexDirection: "row",
    justifyContent: 'space-around',
    paddingTop : 3,


  },
  border: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "black",
    padding : 5,

  }

}

export default Interation;