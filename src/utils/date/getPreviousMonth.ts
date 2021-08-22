import { cloneDate } from './cloneDate';

export const getPreviousMonth = (date: Date) => {
  const newDate = cloneDate(date);
  const year = newDate.getFullYear();
  const monthIndex = newDate.getMonth();
  newDate.setFullYear(year, monthIndex, 0);
  return newDate;
};
