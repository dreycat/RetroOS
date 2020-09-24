const cloneDate = (date: Date) => new Date(date.getTime());

const getDay = (date: Date) => date.getDay();

const getLastDayInMonth = (date: Date) => {
  const newDate = cloneDate(date);
  const year = newDate.getFullYear();
  const monthIndex = newDate.getMonth();
  newDate.setFullYear(year, monthIndex + 1, 0);
  return getDay(newDate);
};

const getLastDayInPreviusMonth = (date: Date) => {
  const newDate = cloneDate(date);
  const year = newDate.getFullYear();
  const monthIndex = newDate.getMonth();
  newDate.setFullYear(year, monthIndex, 0);
  return getDay(newDate);
};

const getDaysInMonth = (date: Date) => {
  const newDate = cloneDate(date);
  const year = newDate.getFullYear();
  const monthIndex = newDate.getMonth();
  newDate.setFullYear(year, monthIndex + 1, 0);
  return newDate.getDate();
};

const getDaysInPreviusMonth = (date: Date) => {
  const newDate = cloneDate(date);
  const year = newDate.getFullYear();
  const monthIndex = newDate.getMonth();
  newDate.setFullYear(year, monthIndex, 0);
  return newDate.getDate();
};

type Result = {
  date: Date;
  prevMonth: string[];
  currentMonth: string[];
  nextMonth: string[];
};

const pretty = (number: number): string => {
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
    result.prevMonth.push(pretty(i));
  }

  for (let i = 1; i <= getDaysInMonth(date); i++) {
    result.currentMonth.push(pretty(i));
  }

  const daysInWeek = 7;
  const rows = 6;
  const weeks = Math.ceil((result.prevMonth.length + result.currentMonth.length) / daysInWeek);
  const extraDays = weeks < rows ? daysInWeek : 0;

  for (let i = 1; i < daysInWeek - getLastDayInMonth(date) + extraDays; i++) {
    result.nextMonth.push(pretty(i));
  }

  return result;
};

export default presenter;
