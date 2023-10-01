import dotenv from 'dotenv'

dotenv.config();

const API_KEY = process.env.API_KEY;


const URL = `https://apis.data.go.kr/1471000/DrbEasyDrugInfoService/getDrbEasyDrugList?serviceKey=`
const _URL = URL + API_KEY + `&type=json`;

function searchPillNameData(pillName) {


  const isName = `&itemName=`
  const data = _URL + isName + pillName;
  // console.log(data)
  return data;

}

async function fetchedPillNameData() {

  const name = "타이레놀"
  const test = searchPillNameData(name)

  try {
    const res = await fetch(test);
    const data = await res.json();
    console.dir(data.body.totalCount)

    // await fetch(test)
    //   .then((res) => { res.json() })
    //   .then((data) => console.dir(data))

  }
  catch (error) {
    console.error();
  }

}

fetchedPillNameData()