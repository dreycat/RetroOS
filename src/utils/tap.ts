export const tap = (tag: string) => (v: any) => {
  console.log(`${tag}: `, v);
  return v;
};
