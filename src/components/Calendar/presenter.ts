import { getPreviousMonth, getDay, getDate, moveToLastDayOfMonth } from '../../utils/date';
import compose from '../../utils/compose';

const getDaysInMonth = compose(getDate, moveToLastDayOfMonth);
const getDaysInPreviousMonth = compose(getDate, moveToLastDayOfMonth, getPreviousMonth);
const getLastDayOfMonth = compose(getDay, moveToLastDayOfMonth);
const getLastDayOfPreviousMonth = compose(getDay, moveToLastDayOfMonth, getPreviousMonth);

type Page = {
  date: Date;
  prevMonth: string[];
  currentMonth: string[];
  nextMonth: string[];
};

const getPrettyDay = (number: number): string => {
  if (number > 0 && number < 10) {
    return `0${number}`;
  }
  return number.toString();
};

export const presenter = (date: Date) => {
  const rows = 6;
  const firstDayOfMonth = 1;
  const daysInWeek = 7;
  const daysInMonth = getDaysInMonth(date);
  const daysInPreviousMonth = getDaysInPreviousMonth(date);
  const lastDayOfMonth = getLastDayOfMonth(date);
  const lastDayOfPreviousMonth = getLastDayOfPreviousMonth(date);
  const page: Page = {
    date,
    prevMonth: [],
    currentMonth: [],
    nextMonth: [],
  };

  for (let i = daysInPreviousMonth - lastDayOfPreviousMonth; i <= daysInPreviousMonth; i++) {
    page.prevMonth.push(getPrettyDay(i));
  }

  for (let i = firstDayOfMonth; i <= daysInMonth; i++) {
    page.currentMonth.push(getPrettyDay(i));
  }

  const weeks = Math.ceil((page.prevMonth.length + page.currentMonth.length) / daysInWeek);
  const extraDays = weeks < rows ? daysInWeek : 0;

  for (let i = firstDayOfMonth; i < daysInWeek - lastDayOfMonth + extraDays; i++) {
    page.nextMonth.push(getPrettyDay(i));
  }

  return page;
};
