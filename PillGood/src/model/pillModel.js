class PillModel {
  constructor(data) {
    this.totalCount = data.body.totalCount;
    this.items = data.body.items.map((item) => {
      return {
        // 이름
        name: item.itemName,
        // 증상
        Symptom: item.efcyQesitm,
        // 사용법
        useage: item.USE_METHOD_QESITM,
        // 주의사항
        warning: item.ATPN_WARN_QESITM,
      };
    });
  }
}

export function setModelData(data) {
  console.log(data, ": setModelData")
  return new PillModel(data);
}