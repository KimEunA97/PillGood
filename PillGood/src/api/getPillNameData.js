import Constants from 'expo-constants';

async function getPillNameData(pillName) {
  // const API_KEY = Constants.manifest2.extra.API_KEY;
  const API_KEY = `1Tr4rV6KC3cceg8vKqCsXmw%2ByfY51F96gYNV9usKql8PWixtz4ssFfo%2FgjASLni1zcLMEt%2FHdDIZlOzc3QBfuw%3D%3D`
  console.log(API_KEY, "API_KEY");
  const URL = `https://apis.data.go.kr/1471000/DrbEasyDrugInfoService/getDrbEasyDrugList?serviceKey=`
  const _URL = URL + API_KEY + `&type=json` + `&numOfRows=50`;
  const isName = `&itemName=`
  const reqURL = _URL + isName + pillName;
  try {
    const res = await fetch(reqURL);
    const data = await res.json();
    if (data.body) {
      return data;
    }
  }
  catch (error) {
    console.error("error", error);
  }
}

export default getPillNameData;