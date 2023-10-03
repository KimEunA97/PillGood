import React, { useState } from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";

function NavigationBar({ onPageChange, currentPage }) {

  const tabs = [
    { id: 'TodayPillScreen', label: '오늘의약' },
    { id: 'PillDetailScreen', label: '상세보기' },
    { id: 'SearchPillScreen', label: '검색' },
    { id: 'UserSettingScreen', label: '설정' },
  ];

  const [activeTab, setActiveTab] = useState('TodayPillScreen');

  function handlePageChange(id) {
    setActiveTab(id);
    onPageChange(id);
  }


  return (
    <View style={styles.navContainer}>
      {tabs.map((tabs) => (
        <Pressable
          onPress={() => handlePageChange(tabs.id)}
          key={tabs.id}
          style={[styles.boxSt, { backgroundColor: tabs.id === activeTab ? '#356562' : '#55B0AA' }]}>
          <Text
            style={styles.text}>
            {tabs.label}
          </Text>
        </Pressable>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  navContainer: {
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#55B0AA"
  },
  boxSt: {
    height: "100%",
    borderColor: "white",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "25%",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white"
  }
})

export default NavigationBar;