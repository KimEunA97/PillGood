const dotenv = require('dotenv')

dotenv.config();

const API_KEY = process.env.API_KEY;


const URL = `https://apis.data.go.kr/1471000/DrbEasyDrugInfoService/getDrbEasyDrugList?serviceKey=`
const _URL = URL + API_KEY + `&type=json`;

const name = "타이레놀"

async function searchPillNameData(pillName) {

  const isName = `&itemName=`
  const getedPillData = _URL + isName + pillName;
  // console.log(getedPillData)

  try {
    const res = await fetch(getedPillData);
    const data = await res.json();
    // console.dir(data.body)

    return data;

  }

  catch (error) {
    console.error();
  }

}

module.exports = searchPillNameData;
// export default searchPillNameData;

// async function fetchedPillNameData(name) {

//   const test = searchPillNameData(name)

//   try {
//     const res = await fetch(test);
//     const data = await res.json();
//     console.dir(data.body.totalCount)
//   }

//   catch (error) {
//     console.error();
//   }

// }
