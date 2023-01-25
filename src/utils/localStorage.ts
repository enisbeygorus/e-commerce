export const LOCAL_STORAGE_SELECTORS = {
  user: "eCommerceUser",
};

export function setLocal<Type>(localName: string, data: Type) {
  localStorage.setItem(localName, JSON.stringify(data));
}

export function getLocal(localName: string) {
  const data = localStorage.getItem(localName);
  if (!data) {
    return null;
  }
  return JSON.parse(data);
}
