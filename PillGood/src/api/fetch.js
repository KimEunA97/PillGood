import dotenv from 'dotenv'

dotenv.config();

const API_KEY = process.env.API_KEY;

const URL = `https://apis.data.go.kr/1471000/DrbEasyDrugInfoService/getDrbEasyDrugList?serviceKey=`
const _URL = URL + API_KEY + `&type=xml`;

function fetchPillNameData(pillName) {

  const isName = `&itemName=`
  const data = _URL + isName + pillName;
  console.log(_URL + isName + pillName);
  return data;

}

fetchPillNameData(name);