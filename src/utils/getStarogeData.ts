// TODO: переписать на дженерики
export default (key: string, defaultValue: any) => () => {
  const raw = localStorage.getItem(key);
  return raw ? JSON.parse(raw) : defaultValue;
};
