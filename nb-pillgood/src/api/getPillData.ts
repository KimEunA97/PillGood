import { ApiResponseItem, MedicineItem } from "./model/model";

interface ApiResponse {
  pageNo: number;
  totalCount: number;
  numOfRows: number;
  items: MedicineItem[];
}

const mapApiResponseToMedicineItem = (data: ApiResponseItem): MedicineItem => {
  return {
    company: data.entpName,
    name: data.itemName,
    sequenceId: data.itemSeq,
    effect: data.efcyQesitm,
    usage: data.useMethodQesitm,
    precautions: data.atpnQesitm,
    ingredients: data.materialName,
    storage: data.storageMethod,
    expirationDate: data.validTerm,
    imageUrl: data.itemImage,
  };
};

// 3. 데이터 요청 및 매핑
export const fetchMedicines = async (
  searchTerm: string
): Promise<MedicineItem[]> => {
  const response = await fetch(
    `https://api.example.com/medicines?search=${searchTerm}`
  );
  const data = await response.json();

  // API 응답이 배열 형태일 경우 각각을 매핑
  return data.items.map(mapApiResponseToMedicineItem);
};
