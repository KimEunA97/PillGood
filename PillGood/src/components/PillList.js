import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Modal, ScrollView, Pressable } from "react-native";

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

  return (
    <View>
      {data.map((item, index) => (
        <View key={index} style={styles.container}>
          {count === 0 && (
            <Text key={index}>It's zero</Text>
          )}
          {count === 1 && (
            <Text key={index}>It's one</Text>
          )}
          {count > 1 && (
            Array.from({ length: count }).map((_, index) => (
                <Pressable>
                  <View key={index} style={styles.container}>
                    <Text>{item.items[index] && item.items[index].name}</Text>
                  </View>
                </Pressable>
            ))
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