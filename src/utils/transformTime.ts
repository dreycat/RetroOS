const prettify = (number: number) => (number < 10 ? `0${number}` : number);

export const transformTime = (seconds: number) => {
  const sec = parseInt(seconds.toFixed(), 10);
  return `${prettify(Math.floor(sec / 60) % 60)}:${prettify(sec % 60)}`;
};
