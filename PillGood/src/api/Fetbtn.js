import { Pressable, View, Text } from "react-native"
import { useState } from "react"
import getPillNameData from "./getPillNameData.js"

const Fetbtn = () => {

  const [data, setData] = useState("");

  const handleData = async () => {
    const fetchedData = await getPillNameData("타이레놀");
    setData(JSON.stringify(fetchedData));
  }

  return (
    <View>
      <Pressable onPress={handleData}>
        <Text>{data}</Text>
      </Pressable>
    </View>
  )
}

export default Fetbtn;