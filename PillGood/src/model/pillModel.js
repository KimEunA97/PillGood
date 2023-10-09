//데이터 모델
function pillModel(data) {
  const result = {
    //데이터 갯수
    totalCount: data.body.totalCount,
    //이름
    name: data.body.items.item.itemName,
    //증상
    Symptom: data.body.items.item.efcyQesitm,
    //사용법
    useage: data.body.items.item.USE_METHOD_QESITM,
    //주의사항
    warning: data.body.items.item.ATPN_WARN_QESITM,
  }
  return result;
}

// 임의의 API 응답 데이터를 생성합니다.
const apiResponseData = {
  body: {
    totalCount : 3,
    items: {
      item: [
        {
          itemName: "테스트 약 이름 1",
          efcyQesitm: "테스트 증상 1",
          USE_METHOD_QESITM: "테스트 사용법 1",
          ATPN_WARN_QESITM: "테스트 주의사항 1"
        },
        {
          itemName: "테스트 약 이름 2",
          efcyQesitm: "테스트 증상 2",
          USE_METHOD_QESITM: "테스트 사용법 2",
          ATPN_WARN_QESITM: "테스트 주의사항 2"
        },
        {
          itemName: "테스트 약 이름 3",
          efcyQesitm: "테스트 증상 3",
          USE_METHOD_QESITM: "테스트 사용법 3",
          ATPN_WARN_QESITM: "테스트 주의사항 3"
        }
      ]
    }
  }
};

const items = apiResponseData.body.items.item;
const arr = items.map((item) => pillModel({ body: { items: { item } } }))

// console.dir(arr, "arr");
console.log(arr[2].name, "arr2")