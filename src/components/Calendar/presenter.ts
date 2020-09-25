import { getPreviusMonth, getDay, getDate, moveToLastDayOfMonth } from '../../utils/date';
import compose from '../../utils/compose';

const getLastDayInMonth = compose(getDay, moveToLastDayOfMonth);
const getDaysInMonth = compose(getDate, moveToLastDayOfMonth);
const getLastDayInPreviusMonth = compose(getDay, moveToLastDayOfMonth, getPreviusMonth);
const getDaysInPreviusMonth = compose(getDate, moveToLastDayOfMonth, getPreviusMonth);

type Result = {
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

const presenter = (date: Date) => {
  const result: Result = {
    date,
    prevMonth: [],
    currentMonth: [],
    nextMonth: [],
  };

  for (let i = getDaysInPreviusMonth(date) - getLastDayInPreviusMonth(date); i <= getDaysInPreviusMonth(date); i++) {
    result.prevMonth.push(getPrettyDay(i));
  }

  for (let i = 1; i <= getDaysInMonth(date); i++) {
    result.currentMonth.push(getPrettyDay(i));
  }

  const daysInWeek = 7;
  const rows = 6;
  const weeks = Math.ceil((result.prevMonth.length + result.currentMonth.length) / daysInWeek);
  const extraDays = weeks < rows ? daysInWeek : 0;

  for (let i = 1; i < daysInWeek - getLastDayInMonth(date) + extraDays; i++) {
    result.nextMonth.push(getPrettyDay(i));
  }

  return result;
};

export default presenter;
