import React from "react";
import { View, Text } from "react-native";

import FetchPillData from "./FetchPillData";

export default function RenderFetchPillData({ pillName }) {


  return (
    <View>
      <FetchPillData pillName={pillName} />
    </View>

  )

}