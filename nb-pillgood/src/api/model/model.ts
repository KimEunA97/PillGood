export interface ApiResponseItem {
  entpName: string;
  itemName: string;
  itemSeq: string;
  efcyQesitm: string;
  useMethodQesitm: string;
  atpnQesitm: string;
  materialName: string;
  storageMethod: string;
  validTerm: string;
  itemImage: string;
}

export interface MedicineItem {
  company: string; // 제조사 이름
  name: string; // 약품 이름
  sequenceId: string; // 약품 일련번호
  effect: string; // 효능 및 효과
  usage: string; // 복용 방법
  precautions: string; // 주의사항
  ingredients: string; // 주성분
  storage: string; // 보관 방법
  expirationDate: string; // 유효 기간
  imageUrl: string; // 약품 이미지 URL
}
