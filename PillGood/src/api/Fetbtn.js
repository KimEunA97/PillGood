import { Pressable } from "react-native"
import getPillNameData from "./getPillNameData.mjs"
import { useState } from "react"

const Fetbtn = () => {

  const [data, setData] = useState({});

  const handleData = () => {
    getPillNameData((data) => setData(data));
  }

  return (
    <View>
      <Pressable onPress={handleData}>{data}</Pressable>
    </View>
  )

}

export default Fetbtn;