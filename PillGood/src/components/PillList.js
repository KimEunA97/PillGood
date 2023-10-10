import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import getPillNameData from "../api/getPillNameData";
import { setModelData } from '../model/pillModel'

const PillList = ({ items }) => {

  // const [pillName, setPillName] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    if (items.length > 0) {
      const fetchData = async () => {
        try {
          const pillData = await Promise.all(items.map(async (pillName) => {
            const resData = await getPillNameData(pillName);
            console.log(resData)
            return setModelData(resData);
          }));
          setData(pillData);
        } catch (error) {
          console.error("error", error);
        }
        fetchData();
      }
    }
  }, [items]);

  return (
    <View>
      {data.map((item, index) => (
        <View key={index} style={styles.container}>
          <Text>Total Count: {item.totalCount}</Text>
          <Text>Name: {item.name}</Text>
          <Text>Symptom: {item.Symptom}</Text>
          <Text>Usage: {item.useage}</Text>
          <Text>Warning: {item.warning}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "black",
    margin: 10,
    padding: 10,
  }
})

export default PillList;