export const isToday = (date: Date) => {
  const today = new Date();
  return date.toDateString() === today.toDateString();
};
