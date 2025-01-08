import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Chip } from "react-native-paper";

const daysOfWeek = [
  { label: "일", value: "Sunday" },
  { label: "월", value: "Monday" },
  { label: "화", value: "Tuesday" },
  { label: "수", value: "Wednesday" },
  { label: "목", value: "Thursday" },
  { label: "금", value: "Friday" },
  { label: "토", value: "Saturday" },
];

export default function DayPickerComp() {
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [show, setShow] = useState(false);

  const toggleDay = (day: string) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((d) => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>요일 선택</Text>

      {/* 요일 Chip 버튼 */}
      <View style={styles.chipContainer}>
        {daysOfWeek.map((day) => (
          <Chip
            key={day.value}
            mode="outlined"
            selected={selectedDays.includes(day.value)}
            onPress={() => toggleDay(day.value)}
            style={styles.chip}
          >
            {day.label}
          </Chip>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  chipContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  chip: {
    margin: 4,
    color: "white",
  },
  selectedDaysText: {
    marginTop: 20,
    fontSize: 16,
  },
});
