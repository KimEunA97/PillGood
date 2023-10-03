const dotenv = require('dotenv')

dotenv.config();

const API_KEY = process.env.API_KEY;


const URL = `https://apis.data.go.kr/1471000/DrbEasyDrugInfoService/getDrbEasyDrugList?serviceKey=`
const _URL = URL + API_KEY + `&type=json`;

async function searchPillNameData(pillName) {

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

module.exports = searchPillNameData;
