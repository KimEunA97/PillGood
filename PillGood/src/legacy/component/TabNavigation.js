import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import TodayPillMenu from '../pages/TodayPillMenu';
import ViewAllMenu from '../pages/ViewAllMenu';
import SearchMenu from '../pages/SearchMenu';
import SettingMenu from '../pages/SettingMenu';
import InteractionTab from './InteractionTabs.js'


const TabNavigation = ({ onTimerDone }) => {
  const [activeTab, setActiveTab] = useState('TodayPillMenu');

  const tabs = [
    { id: 'TodayPillMenu', label: '오늘의약' },
    { id: 'ViewAllMenu', label: '전체보기' },
    { id: 'SearchMenu', label: '검색' },
    { id: 'SettingMenu', label: '설정' },
  ];

  // const renderScreen = () => {
  //   switch (activeTab) {
  //     case 'TodayPillMenu':
  //       return <TodayPillMenu />;
  //     case 'ViewAllMenu':
  //       return <ViewAllMenu />;
  //     case 'SearchMenu':
  //       return <SearchMenu />;
  //     case 'SettingMenu':
  //       return <SettingMenu />;
  //     default:
  //       return null;
  //   }
  // };

  const handleTabPress = (tabId) => {
    //onPress(눌렀을때)로 값을 받으면 상태값 바꾸는 함수에 전달
    setActiveTab(tabId);
  };

  return (
    <View>
      <View style={styles.tabContainer}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab.id}
            onPress={() => handleTabPress(tab.id)}
            style={[
              styles.tabButton,
              activeTab === tab.id && styles.activeTabButton,
            ]}
          >
            {/* 카테고리 이름 */}
            <Text style={[styles.tabButtonText, activeTab === tab.id && styles.activeTabButtonText]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* 하위 컴포넌트 : 유저 상호작용 버튼 */}
      <InteractionTab></InteractionTab>
      {/* 활성화된 탭에 해당하는 컴포넌트 */}
      {activeTab === 'TodayPillMenu' && <TodayPillMenu onTimerDone={onTimerDone} />}
      {activeTab === 'ViewAllMenu' && <ViewAllMenu />}
      {activeTab === 'SearchMenu' && <SearchMenu />}
      {activeTab === 'SettingMenu' && <SettingMenu />}
    </View>
  );
};

const styles = {
  container: {
    flex: 0.1,
    paddingTop: 25,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#55B0AA',
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  activeTabButton: {
    backgroundColor: '#336B66',
  },
  tabButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  activeTabButtonText: {
    fontWeight: 'bold',
  },
  screenContainer: {
    flex: 1,
  },
};


export default TabNavigation;