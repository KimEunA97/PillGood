//데이터 모델
function pillModel(data) {
  const result = {
    //이름
    name: data.body.items.item.itemName,
    //증상
    Symptom: data.body.items.item.efcyQesitm,
    //데이터 갯수
    totalCount: data.body.items.item.totalCount,
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
    items: {
      item: {
        itemName: "테스트 약 이름",
        efcyQesitm: "테스트 증상",
        totalCount: 42,
        USE_METHOD_QESITM: "테스트 사용법",
        ATPN_WARN_QESITM: "테스트 주의사항"
      }
    }
  }
};

// 데이터 모델 함수를 호출하여 데이터를 추출합니다.
let arr = [];
const result = pillModel(apiResponseData);
arr.push(result);
// 결과를 출력해 봅니다.
console.log(arr, "arr")
