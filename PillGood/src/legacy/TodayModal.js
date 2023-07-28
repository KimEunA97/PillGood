import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import FetchPillData from '../api/FetchPillData';

const TodayModal = ({ visible, onClose, onAddPill }) => {
  const [pillName, setPillName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [symptoms, setSymptoms] = useState('');

  //타이머 제어
  const [timerValue, setTimerValue] = useState('');

  const handlePillNameChange = (text) => {
    setPillName(text);
  };

  const handleCompanyNameChange = (text) => {
    setCompanyName(text);
  };

  const handleSymptomsChange = (text) => {
    setSymptoms(text);
  };

  //타이머 설정 함수
  const handleTimerChange = (text) => {
    // parseInt는 문자열을 정수값으로 변환
    const value = parseInt(text, 10);

    if (!isNaN(value)) {
      setTimerValue(value);
    } else {
      setTimerValue(0); // 숫자로 변환할 수 없는 경우 기본값으로 설정
    }
  };

  //pillList 컴포넌트로 전달
  const handleConfirm = () => {
    //확인버튼 누르면 입력한 칸 초기화
    setPillName('');
    setCompanyName('');
    setSymptoms('');
    setTimerValue(0);

    // 객체로 여러 값을 전달할 수 있음
    if (pillName || companyName || symptoms || timerValue) {
      const pill = {
        pillName: pillName,
        companyName: companyName,
        symptoms: symptoms,
        timerValue: timerValue,
      }
      //객체 콜백
      onAddPill(pill);

    }
    //확인 누르면 닫기
    onClose();
  };

  return (
    <Modal visible={visible} transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.textColor}>제품명</Text>



          {/* <TextInput
            style={styles.input}
            placeholder="제품명"
            value={pillName}
            onChangeText={handlePillNameChange}
          />
          
          {/* 
          <Text style={styles.textColor}>업체명</Text>
          <TextInput
            style={styles.input}
            placeholder="업체명"
            value={companyName}
            onChangeText={handleCompanyNameChange}
          />


          <Text style={styles.textColor}>증 상</Text>
          <TextInput
            style={styles.input}
            placeholder="증 상"
            value={symptoms}
            onChangeText={handleSymptomsChange}
          /> */}



          <Text style={styles.textColor}>시간 설정</Text>
          <TextInput
            style={styles.input}
            placeholder="시간 설정"
            value={timerValue.toString()}
            onChangeText={handleTimerChange}
          />

          <View style={styles.btnContainer}>
            <TouchableOpacity onPress={handleConfirm} style={styles.createBtn}>
              <Text style={styles.textColor}>추가</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onClose} style={styles.cancelBtn}>
              <Text style={styles.textColor}>취소</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#007088',
    padding: 20,
    borderRadius: 4,
    width: '80%',
    height: "80%",
    alignSelf: 'center',
  },
  textColor: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
  },
  input: {
    borderWidth: 1,
    backgroundColor: "white",
    borderColor: 'gray',
    padding: 10,
    marginTop: 10,
    fontSize: 20,
    textAlign: "center"
  },
  btnContainer: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 20,
  },
  createBtn: {
    width: '45%',
    backgroundColor: '#4B73FF',
    borderRadius: 5,
  },
  cancelBtn: {
    width: '45%',
    backgroundColor: '#00BC9A',
    borderRadius: 5,

  },
});

export default TodayModal;
