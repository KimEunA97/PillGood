import React, { useState } from 'react';
import { SafeAreaView, TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export const ItsDateTimePicker = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [showPicker, setShowPicker] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(false);
    setDate(currentDate);
  };

  const showDatePicker = () => {
    setShowPicker(true);
  };

  return (
    <View>
      <TouchableOpacity
        onPress={showDatePicker}
        style={styles.button}
      >
        <Text style={styles.buttonText}>시간 설정</Text>
      </TouchableOpacity>
      {showPicker && (
        <DateTimePicker
          value={date}
          mode="time"
          is24Hour={true}
          display="spinner"
          onChange={onChange}
          style={styles.dateTimePicker}
          positiveButton={{ label: '확인', textColor: 'black' }}
          negativeButton={{ label: '취소', textColor: 'black' }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dateTimePicker: {
    backgroundColor: 'white',
  },
  button: {
    width: 200,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    color: 'gray',
    textAlign: 'center',
    fontSize: 16,
  },
});
