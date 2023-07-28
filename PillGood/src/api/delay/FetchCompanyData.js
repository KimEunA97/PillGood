import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { View, Text } from 'react-native';

export default function FetchCompanyData({ name }) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        const url = `https://apis.data.go.kr/1471000/DrbEasyDrugInfoService/getDrbEasyDrugList?serviceKey=1XHlNsF6Hmgb8Wy1V%2FaTlJLpKD5korFpe6LEawoPDfjIHlM3RJSFRTgo%2BbGckpWv1t%2BS5VQj3%2FK51SWFgSq4oA%3D%3D&pageNo=1&numOfRows=3&entpName=${name}&type=json`;
        const response = await axios.get(url);
        setIsLoading(false);
        setData(response.data.body.items);
      } catch (error) {
        console.error(error);
      }
    };

    if (name) {
      fetchCompanyData();
    }
  }, [name]);

console.log(data)


  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  else {
    return <Text>{JSON.stringify(data)}</Text>
  }
}
