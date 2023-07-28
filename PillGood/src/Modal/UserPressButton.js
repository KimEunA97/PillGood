import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

export default function UserPressButton(props) {

  const styles = {
    confirmButton: {
      width: 120,
      backgroundColor: props.color,
      borderRadius: 10,
      padding: 5,
      margin: 0,
      justifyContent: 'center',
      alignItems: 'center'
    },
    confirmText: {
      fontSize: 30,
      color: "white",
      fontWeight: "bold"
    },

  }

  return (
    <TouchableOpacity

      onPress={props.onPress}
      style={styles.confirmButton}>
      <Text style={styles.confirmText}>{props.name}</Text>
    </TouchableOpacity>
  )

}
