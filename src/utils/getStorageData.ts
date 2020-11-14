export const getStorageData = <T>(key: string, defaultValue: T) => (): T => {
  const raw = localStorage.getItem(key);
  return raw ? JSON.parse(raw) : defaultValue;
};
