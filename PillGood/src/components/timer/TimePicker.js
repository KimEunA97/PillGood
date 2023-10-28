import React, { useState } from 'react';
import { View, Button, Text, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function TimePicker() {
  // 1초 * 60 = 60초(1분) * 60 = 60분 * 9 = 9시간
  const UTC9 = 1000 * 60 * 60 * 9  //한국시간 UTC+9
  const [time, setTime] = useState(new Date((new Date()).getTime() + UTC9));
  console.log(time, "현재시간")
  const [show, setShow] = useState(false);

  const onChange = (event, selectedTime) => {
    if (selectedTime) {
      setShow(Platform.OS === 'ios'); // iOS에서는 시간을 선택하면 자동으로 모달이 닫히므로 Android에서만 모달을 제어합니다.
      setTime(selectedTime);
      console.log(show)
    }
  };

  return (
    <View>
      <Button title="Open Time Picker" onPress={() => setShow(true)} />
      {show && (
        <DateTimePicker
          locale='KO'
          value={time}
          mode="time"
          is24Hour={true}
          onChange={onChange}
        />
      )}
      <Text>Selected Time: {time.toLocaleTimeString()}</Text>
    </View>
  );
}
