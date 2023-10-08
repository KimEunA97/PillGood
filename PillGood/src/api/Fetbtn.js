import { Pressable, View, Text, StyleSheet } from "react-native"
import { useState, useEffect } from "react"
import getPillNameData from "./getPillNameData.js"

const Fetbtn = () => {

  const [data, setData] = useState("");

  const handleData = async () => {
    const fetchedData = await getPillNameData("타이레놀");
    setData(JSON.stringify(fetchedData));
  }

  useEffect(() => {
    console.log("get data!")
  }, [data])

  return (
    <View style={styles.btn}>
      <Pressable onPress={handleData} />
      {/* <Text>{data}</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
  btn : {
    width : 100,
    height : 100,
  }
})

export default Fetbtn;