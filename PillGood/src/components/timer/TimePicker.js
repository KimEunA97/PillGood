import React, { useState } from 'react';
import { View, Button, Text, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function TimePicker() {
  const [time, setTime] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedTime) => {
    if (selectedTime) {
      setShow(Platform.OS === 'ios'); // iOS에서는 시간을 선택하면 자동으로 모달이 닫히므로 Android에서만 모달을 제어합니다.
      setTime(selectedTime);
    }
  };

  return (
    <View>
      <Button title="Open Time Picker" onPress={() => setShow(true)} />
      {show && (
        <DateTimePicker
          value={time}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      <Text>Selected Time: {time.toLocaleTimeString()}</Text>
    </View>
  );
}
