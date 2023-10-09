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
export function setModelData() {

  const totalCount = apiResponseData.body.totalCount;
  const items = apiResponseData.body.items.item;
  const arr = items.map((item) => {
    const result = pillModel({ body: { items: { item } } });
    result.totalCount = totalCount;
    return result;
  })
  return arr;
}