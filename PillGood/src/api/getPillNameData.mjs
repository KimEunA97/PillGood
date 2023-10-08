// import './loadEnv.mjs'
// import dotenv from 'dotenv';
// dotenv.config();\
// import { config } from 'dotenv';
// config();
import Config from 'react-native-config'


async function getPillNameData(pillName) {
  const API_KEY = Config.API_KEY;
  console.log(API_KEY)
  const URL = `https://apis.data.go.kr/1471000/DrbEasyDrugInfoService/getDrbEasyDrugList?serviceKey=`
  const _URL = URL + API_KEY + `&type=json`;
  const isName = `&itemName=`
  const reqURL = _URL + isName + pillName;
  try {
    const res = await fetch(reqURL);
    const data = await res.json();
    console.dir(data.body)
    return data;
  }
  catch (error) {
    console.error("error", error);
  }
}

export default getPillNameData;