import React, { useState } from "react";
import { Modal, Text, StyleSheet, View, TouchableWithoutFeedback, Pressable } from "react-native";

function SearchModal({ isVisible, onClose }) {

  return (
    <Pressable onPress={onClose}>
      <Modal
        transparent={true}
        presentationStyle={"fullScreen"}
        visible={isVisible}
        animationType="fade"

      >
        <View style={styles.container}>
          <View style={styles.content}>
            <Text>asdasdasd</Text>
          </View>
        </View>
      </Modal>
    </Pressable>
  )
}

export default SearchModal;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)"

  },
  content: {
    justifyContent: "center",
    alignItems: "center",

    width: "50%",
    height: "70%",
    backgroundColor: "#007088",

    borderRadius: 10,

  }

})