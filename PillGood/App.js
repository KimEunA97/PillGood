import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, SafeAreaView, StyleSheet } from 'react-native';

import NavigationBar from './src/nav/NavigationBar';

import PillDetailScreen from './src/pages/PillDetailScreen';
import SearchPillScreen from './src/pages/SearchPillScreen';
import TodayPillScreen from './src/pages/TodayPillScreen';
import UserSettingScreen from './src/pages/UserSettingScreen';
import CreateModal from './src/modal/createModal';

export default function App() {

  const [currentPage, setCurrentPage] = useState('TodayPillScreen')
  const handleNavigation = (page) => {
    setCurrentPage(page);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <CreateModal />
        <NavigationBar onPageChange={handleNavigation} currentPage={currentPage} />
        {currentPage === "TodayPillScreen" && <TodayPillScreen />}
        {currentPage === "SearchPillScreen" && <SearchPillScreen />}
        {currentPage === "PillDetailScreen" && <PillDetailScreen />}
        {currentPage === "UserSettingScreen" && <UserSettingScreen />}
      </View>
    </SafeAreaView >
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey"
  }
})