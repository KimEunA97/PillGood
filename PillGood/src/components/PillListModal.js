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
        const itemsArr = Array.isArray(items) ? items : [items];
        if (itemsArr.length > 0) {
          console.log(itemsArr, "items");
          const promises = itemsArr.map(async (pillName) => {
            const resData = await getPillNameData(pillName);
            const pillData = setModelData(resData);
            return pillData;
          });
          const pillDataArray = await Promise.all(promises);
          const totalCount = pillDataArray[0].totalCount;
          setCount(totalCount);
          console.log("totalCount :", totalCount);
          setData(pillDataArray);
          console.log(data[0].items[0].name, "40");
        }

      } catch (error) {
        console.error("fetch error :", error);
      }
    };
    fetchData();
  }, [items]);

  // 버튼을 누르면 선택 결과를 콜백하는 함수
  const handlebtn = (data) => {
    console.log(data, "callback data")
    callbackSelectedBtn(data);
  }
  return (
    <View>
      {count === 0 && (
        <Pressable style={styles.container}>
          <Text>No result</Text>
        </Pressable>
      )}
      {count === 1 && data.length > 0 && (
        <Pressable style={styles.container} onPress={() => handlebtn(data[0].items[0].name)}>
          <Text>{data[0].items[0].name}</Text>
        </Pressable>
      )}
      {count > 1 && data.length > 0 &&
        data.map((items, index) => (
          items.items.map((innerItem, innerIndex) => (
            <Pressable key={innerIndex} onPress={() => handlebtn(innerItem)}>
              <View style={styles.container}>
                <Text>{innerItem.name}</Text>
              </View>
            </Pressable>
          ))
        ))
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "pink",
    margin: 10,
    padding: 10,
  }
})

export default PillListModal;