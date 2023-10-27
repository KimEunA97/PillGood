import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Modal, ScrollView, Pressable } from "react-native";

import getPillNameData from "../api/getPillNameData";
import { setModelData } from "../model/pillModel";

const PillListModal = ({ items, callbackSelectedBtn }) => {

  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    // model을 map으로 전달받도록 해놓아서 배열을 받아야 함.
    const fetchData = async () => {
      console.log("items type is", typeof (items))
      try {
        if (items === null) {
          console.log("items is null")
          return null;
        }
        if (items.length > 0) {
          console.log(items, "items");
          const promises = items.map(async (pillName) => {
            const resData = await getPillNameData(pillName);
            console.log("resData");
            const pillData = setModelData(resData);
            console.dir(pillData, "pillData");
            return pillData;
          });
          const pillDataArray = await Promise.all(promises);
          const totalCount = pillDataArray[0].totalCount;
          setCount(totalCount);
          console.log("totalCount", totalCount)
          setData(pillDataArray);
        }

      } catch (error) {
        console.error("fetch error :", error);
      }
    };
    fetchData();
  }, [items]);

  // 버튼을 누르면 선택 결과를 콜백하는 함수
  const handlebtn = (data) => {
    console.log(data)
    callbackSelectedBtn(data);
  }
  return (
    <View>
      {data.map((item) => (
        <View style={styles.container} >
          {count === 0 && body === null && (
            <Pressable style={styles.container}>
              <Text>No result</Text>
            </Pressable>
          )}
          {count === 1 && (
            <Pressable style={styles.container}>
              <Text >It's one</Text>
            </Pressable>
          )}
          {count > 1 && (
            item.items.map((innerItem, index) => (
              <Pressable key={index} onPress={() => handlebtn(innerItem)}>
                <View style={styles.container}>
                  <Text>{innerItem.name}</Text>
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

export default PillListModal;