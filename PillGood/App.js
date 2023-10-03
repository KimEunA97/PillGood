import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, SafeAreaView, StyleSheet } from 'react-native';
import NavigationBar from './src/components/navigationBar';

export default function App() {


  return (
    <View style={styles.container}>
      <NavigationBar />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    height: 30,
    backgroundColor: "blue"
  }
})