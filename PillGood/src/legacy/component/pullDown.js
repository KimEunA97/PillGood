import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

//false로 닫힌 상태
const DropdownMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //메뉴 반전. false->true
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemPress = (item) => {
    console.log('Selected item:', item);
  };

  return (
    <View>
      <TouchableOpacity onPress={handleMenuToggle}>
        <Text>메뉴 토글</Text>
      </TouchableOpacity>
      {isMenuOpen && (
        <View>
          <TouchableOpacity onPress={() => handleMenuItemPress('아침')}>
            <Text>아침</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleMenuItemPress('점심')}>
            <Text>점심</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleMenuItemPress('저녁')}>
            <Text>저녁</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = {

  container : {

  }

}


export default DropdownMenu;
