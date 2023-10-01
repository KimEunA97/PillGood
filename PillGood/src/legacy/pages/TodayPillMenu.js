import React, { useState } from 'react';
import { View, StyleSheet, Modal, TextInput, Button } from 'react-native';
import RenderFetchPillData from '../api/RenderFetchPillData';
import ListCreateButton from '../component/ListCreateButton';
import SearchingModal from '../Modal/SearchingModal'
import FetchPillData from '../api/FetchPillData';
import UserPressButton from '../Modal/UserPressButton';
import NameWithInputBox from '../Modal/NameWithInputBox';

export default function TodayPillMenu() {
  const [inputValue, setInputValue] = useState('');
  const [pillName, setPillName] = useState('');
  const [invisible, setInvisible] = useState(false);

  const handleSendValue = () => {
    setPillName(inputValue);
    setInvisible(false);
    setInputValue('');
  };

  const handleConfirm = () => {
    console.log(inputValue)
    handleSendValue(inputValue);
  }

  const handleCancel = () => {
    setInvisible(false);
    setInputValue('');
  };

  const pressTheCreateBtn = () => {
    setInvisible(true);
  };

  return (
    <View style={styles.allAlign}>
      {/* 약정보 렌더링 */}
      <FetchPillData name={pillName} />

      {/* Create 버튼 */}
      <ListCreateButton onPress={pressTheCreateBtn} />

      {/* 모달창 컨테이너 */}
      <Modal visible={invisible} transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>

            <NameWithInputBox value={inputValue}
              name="약이름: "
              onChangeText={setInputValue}
            ></NameWithInputBox>
            {/* <NameWithInputBox value={inputValue}
              name="업체명: "
              onChangeText={setInputValue}
            ></NameWithInputBox>
            <NameWithInputBox value={inputValue}
              name="증   상: "
              onChangeText={setInputValue}
            ></NameWithInputBox> */}

            <View style={styles.buttonContainer}>
              <UserPressButton name="확인" color="#4B73FF" onPress={handleConfirm} />
              <UserPressButton name="취소" color="#00BC9A" onPress={handleCancel} />
            </View>
          </View>
        </View>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  allAlign: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  modalContent: {
    flex: 0.4,
    backgroundColor: '#007088',
    padding: 30,
    borderRadius: 10,
  },
  buttonContainer: {
    paddingTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
