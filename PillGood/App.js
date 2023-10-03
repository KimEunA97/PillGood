import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, SafeAreaView, StyleSheet } from 'react-native';
import NavigationBar from './src/nav/NavigationBar';

export default function App() {

  const [isPage, setPage] = useState();
  return (
    <View style={styles.container}>
      <NavigationBar />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey"
  }
})