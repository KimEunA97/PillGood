import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import getPillNameData from "../api/getPillNameData";
import { setModelData } from "../model/pillModel";

const PillList = ({ items }) => {

  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (items === null) {
          return null;
        }
        if (items.length > 0) {
          console.log(items, "items");
          const promises = items.map(async (pillName) => {
            const resData = await getPillNameData(pillName);
            console.log("resData");
            const pillData = setModelData(resData); // 여기서 pillData를 수정
            console.dir(pillData, "pillData");
            return pillData;
          });
          const pillDataArray = await Promise.all(promises);
          const totalCount = pillDataArray[0].totalCount;
          setCount(totalCount); // totalCount 상태 업데이트
          // console.log(totalCount)
          setData(pillDataArray);

          // let count;
          // setData(pillData); 
          // console.dir(pillData, "pillData")
          // pillData.totalCount = count;
          // setCount(count);
          // console.log(count, "count");
        }

      } catch (error) {
        console.error("fetch error :", error);
      }
    };
    fetchData();
  }, [items]);

  const renderItems = (totalCount) => {
    const components = [];
    for (let i = 0; i < totalCount; i++) {
      components.push(
        <Text key={i}>Item {i + 1}</Text>
      );
    }
    return components;
  };
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