import React, { useState, useEffect } from 'react';
import { Text, StyleSheet } from 'react-native';

const Timer = ({ timerValue, onTimerDone }) => {
  const [remainingTime, setRemainingTime] = useState(timerValue);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => {
        const newTime = prevTime - 1000;
        return newTime >= 0 ? newTime : 0;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (remainingTime === 0) {
      onTimerDone(true);
    }
  }, [remainingTime, onTimerDone]);

  const formatTime = (time) => {
    const seconds = Math.floor(time / 1000) % 60;
    const minutes = Math.floor(time / 1000 / 60) % 60;
    const hours = Math.floor(time / 1000 / 60 / 60);

    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return <Text style={styles.timerText}>{formatTime(remainingTime)}</Text>;
};

const styles = StyleSheet.create({
  timerText: {
    color: 'white',
  },
});

export default Timer;
