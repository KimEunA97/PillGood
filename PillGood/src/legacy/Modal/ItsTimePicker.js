import React from "react";
import { View } from "react-native";
import { ItsDateTimePicker } from "../legacy/component/TimePicker";


export default function ItsTimePicker() {

  return (

    <View style={styles.timePickerStyle}>
      <ItsDateTimePicker
      ></ItsDateTimePicker>
    </View>
  )

}

const styles = {
  timePickerStyle: {
    alignItems: "center",
    margin: 25,
  }
}