import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Timer from './Timer';

const PillList = ({ list, onTimerDone }) => {
  return (
    <View style={styles.pillList}>
      {list.map((pill, index) => (
        <View key={index} style={styles.pillItem}>
          <Text style={styles.pillText}>{pill.pillName}</Text>
          <Text style={styles.pillText}>{pill.companyName}</Text>
          <Text style={styles.pillText}>{pill.symptoms}</Text>
          <Timer timerValue={pill.timerValue} onTimerDone={onTimerDone} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  pillList: {
    marginTop: 20,
    alignItems: 'center',
  },
  pillItem: {
    backgroundColor: '#007088',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  pillText: {
    color: 'white',
  },
});

export default PillList;
