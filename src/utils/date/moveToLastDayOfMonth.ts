import { cloneDate } from './cloneDate';

export const moveToLastDayOfMonth = (date: Date) => {
  const newDate = cloneDate(date);
  const year = newDate.getFullYear();
  const monthIndex = newDate.getMonth();
  newDate.setFullYear(year, monthIndex + 1, 0);
  return newDate;
};
