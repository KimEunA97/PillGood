import { PillResponseItem, PillItem } from "./type/types";

const mappingApiPillData = (data: PillResponseItem): PillItem => {
  return {
    company: data.entpName,
    pillName: data.itemName,
    sequenceId: data.itemSeq,
    efficacy: data.efcyQesitm,
    usage: data.useMethodQesitm,
    precautions: data.atpnQesitm,
    ingredients: data.intrcQesitm,
    warning: data.atpnWarnQesitm,
    storageMethod: data.depositMethodQesitm,
    sideEffects: data.seQesitm,
    imageUrl: data.itemImage,
  };
};

// 3. 데이터 요청 및 매핑
export const fetchPill = async (searchTerm: string): Promise<PillItem[]> => {
  const response = await fetch(
    `https://api.example.com/medicines?search=${searchTerm}`
  );
  const data = await response.json();

  // API 응답이 배열 형태일 경우 각각을 매핑
  return data.items.map(mappingApiPillData);
};
