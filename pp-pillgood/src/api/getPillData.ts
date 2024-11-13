const mappingApiPillData = (data: any) => {
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

export const fetchPill = async (searchTerm: string) => {
  const response = await fetch(
    `https://api.example.com/medicines?search=${searchTerm}`
  );
  const data = await response.json();

  return data.items.map(mappingApiPillData);
};
