async function getPillNameData(pillName) {
  console.log(API_KEY, "API_KEY");
  const API_KEY = `1Tr4rV6KC3cceg8vKqCsXmw%2ByfY51F96gYNV9usKql8PWixtz4ssFfo%2FgjASLni1zcLMEt%2FHdDIZlOzc3QBfuw%3D%3D`;
  const URL = `https://apis.data.go.kr/1471000/DrbEasyDrugInfoService/getDrbEasyDrugList?serviceKey=`;
  const _URL = URL + API_KEY + `&type=json` + `&numOfRows=50`;
  const isName = `&itemName=`;
  const reqURL = _URL + isName + pillName;
  try {
    const res = await fetch(reqURL);
    const data = await res.json();
    if (data.body && data.body.items) {
      // API의 결과 중 필요한 데이터를 추출하고 모델에 맞게 할당
      const pillData = data.body.items.map((item) => ({
        pillName: item.itemName,
        pillEffect: item.efcyQesitm,
        pillUsage: item.useMethodQesitm,
        pillWarning: item.atpnQesitm,
      }));

      console.log(pillData.pillName); // 모델에 맞게 변환된 데이터 출력
      return pillData;
    }
  } catch (error) {
    console.error("error", error);
  }
}
export default getPillNameData;
