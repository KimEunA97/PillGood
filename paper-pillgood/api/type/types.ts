export interface PillResponseItem {
  entpName: string; //제조사명 : 삼진제약(주)
  itemName: string; //제품명 : 아네모정
  itemSeq: string; //제품번호 : 195900043
  efcyQesitm: string; //효력 : 이 약은 ~~에 사용합니다.
  useMethodQesitm: string; //용법 : 성인 1회 2정
  atpnQesitm: string | null; //ㅁㅁ에게는 사용하지 마십시오.
  atpnWarnQesitm: string | null; //사용 전 주의
  intrcQesitm: string | null; //ㅁㅁ와 함께 사용하지 마십시오
  seQesitm: string; //설사 변비 등이 나타날 수
  depositMethodQesitm: string; //빛을 피해 실온에서 보관
  itemImage: string | null;
}

export interface PillItem {
  pillName: string; // 약품 이름
  company: string; // 제조사 이름
  sequenceId: string | null; // 약품 일련번호
  efficacy: string | null; // 효능 및 효과
  usage: string | null; // 복용 방법
  precautions: string | null; // 주의사항
  ingredients: string | null; // 주성분
  storageMethod: string | null; // 보관 방법
  warning: string | null; // 경고 사항
  sideEffects: string | null; // 부작용
  imageUrl: string | null; // 약품 이미지 URL
}

export interface NotificationSettings {
  id: number;
  medicationId: number;
  enabled: boolean;
  time: string;
}

// interface PillData {
//   /*
//   precautions: 주의 사항
//   warning: 경고 사항
//   storageMethod: 저장 방법
//   efficacy: 효능
//   drugInteractions: 약물 간 상호 작용
//   imageUrl: 이미지 URL
//   releaseDate: 출시일
//   sideEffects: 부작용
//   lastUpdated: 마지막 업데이트 날짜
//   usageInstructions: 사용 지침
//   */

//   precautions: string | null;
//   warning: string | null;
//   businessNumber: string;
//   storageMethod: string | null;
//   efficacy: string | null;
//   company: string;
//   drugInteractions: string | null;
//   imageUrl: string | null;
//   pillName: string;
//   pillSeq: string;
//   releaseDate: string | null;
//   sideEffects: string | null;
//   lastUpdated: string | null;
//   usageInstructions: string | null;
// }

export interface Medication {
  id: number;
  name: string;
  time: string;
}

export interface AppStorageData {
  pills: Medication[];
  notifications: NotificationSettings[];
  setPills: (medications: Medication[]) => void;
  setNotifications: (notifications: NotificationSettings[]) => void;
}
