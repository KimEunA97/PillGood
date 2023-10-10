import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import getPillNameData from "../api/getPillNameData";
import { setModelData } from "../model/pillModel";

const PillList = ({ items }) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (items === null) {
          return null;
        }
        if (items.length > 0) {
          console.log(items, "items")
          const promises = items.map(async (pillName) => {
            const resData = await getPillNameData(pillName);
            console.log(resData, "resData");
            return setModelData(resData);
          });
          const pillData = await Promise.all(promises);
          console.dir(pillData, "pillData")
          setData(pillData);
        }

      } catch (error) {
        console.error("fetch error :", error);
      }
    };
    fetchData();
  }, [items]);

  return (
    <View>
      {data.map((item, index) => (
        <View key={index} style={styles.container}>
          {item.totalCount === 0 && (
            <Text key={index}>It's zero</Text>
          )}
          {item.totalCount === 1 && (
            <Text key={index}>It's one</Text>
          )}
          {item.totalCount > 1 && (
            <Text key={index}>{item.items[index].name}</Text>
          )}
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