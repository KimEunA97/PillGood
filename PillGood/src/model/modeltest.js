import { useEffect, useState } from "react";
import { View, Text, Pressable, StyleSheet } from 'react-native'

import { setModelData } from "./pillModel";

export default function Test({ apiResponseData }) {
  const [datas, setDatas] = useState([]);
  const [visible, setVisible] = useState(false)
  // useEffect(() => {

  // },)
  const handledata = () => {
    setDatas(apiResponseData);
    setVisible(true)
  }



  const data = setModelData(apiResponseData);

  return (
    <View>
      <Pressable style={styles.btn} onPress={handledata} />
      {visible && data.map((dataItem, index) => (
        <View key={index}>
          <Text>Total Count: {dataItem.totalCount}</Text>
          <Text>Name: {dataItem.name}</Text>
          <Text>Symptom: {dataItem.Symptom}</Text>
          <Text>Usage: {dataItem.useage}</Text>
          <Text>Warning: {dataItem.warning}</Text>
        </View>
      ))}
    </View>
  )
}
const styles = StyleSheet.create({
  btn: {
    width: 100,
    height: 100,
    backgroundColor: "black"
  }
})

// const apiResponseData = {
//   body: {
//     totalCount: 3,
//     items: {
//       item: [
//         {
//           itemName: "테스트 약 이름 1",
//           efcyQesitm: "테스트 증상 1",
//           USE_METHOD_QESITM: "테스트 사용법 1",
//           ATPN_WARN_QESITM: "테스트 주의사항 1",
//         },
//         {
//           itemName: "테스트 약 이름 2",
//           efcyQesitm: "테스트 증상 2",
//           USE_METHOD_QESITM: "테스트 사용법 2",
//           ATPN_WARN_QESITM: "테스트 주의사항 2",
//         },
//         {
//           itemName: "테스트 약 이름 3",
//           efcyQesitm: "테스트 증상 3",
//           USE_METHOD_QESITM: "테스트 사용법 3",
//           ATPN_WARN_QESITM: "테스트 주의사항 3",
//         },
//       ],
//     },
//   },
// };