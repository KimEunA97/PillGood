import { Pressable, View, Text } from "react-native"
import getPillNameData from "./getPillNameData.mjs"
import { useState, useEffect } from "react"

const Fetbtn = () => {

  const [data, setData] = useState({});

  const handleData = () => {
    getPillNameData((data) => setData(data));
  }

  useEffect()

  return (
    <View>
      <Pressable onPress={handleData}>
        <Text>{data}</Text>
      </Pressable>
    </View>
  )

}

export default Fetbtn;