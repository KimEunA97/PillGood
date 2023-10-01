import React from "react";
import { TouchableOpacity, Image } from "react-native";


export default function ListCreateButton(props) {

  return (
    <TouchableOpacity onPress={props.onPress}
      style={styles.createButton}>
      <Image source={require('../img/plusMark.png')}
        style={{ width: 50, height: 50 }}></Image>
    </TouchableOpacity>
  )

}

const styles = {
  createButton: {
    width: '80%',
    height: 150,
    backgroundColor: '#167286',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: 'black',
    padding: 15,
    margin: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
}