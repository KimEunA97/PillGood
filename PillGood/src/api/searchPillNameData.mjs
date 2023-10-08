import dotenv from 'dotenv'

dotenv.config();

async function searchPillNameData(pillName) {

  const API_KEY = process.env.API_KEY;
  const URL = `https://apis.data.go.kr/1471000/DrbEasyDrugInfoService/getDrbEasyDrugList?serviceKey=`
  const _URL = URL + API_KEY + `&type=json`;
  const isName = `&itemName=`
  const reqURL = _URL + isName + pillName;
  // console.log(reqURL)
  try {
    const res = await fetch(reqURL);
    const data = await res.json();
    // console.dir(data.body)
    return data;
  }
  catch (error) {
    console.error();
  }
}

