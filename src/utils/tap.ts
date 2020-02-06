export default (tag: string) => (v: any) => {
  console.log(`${tag}: `, v);
  return v;
};
