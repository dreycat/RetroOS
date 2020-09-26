import React, { useState } from 'react';

import Calendar from './Calendar';
import presenter from './presenter';
import { isToday } from '../../utils/date';
import styles from './Calendar.module.css';

const firstLetters = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const calendar = new Calendar(presenter);

const CalendarComponent = () => {
  const [page, setPage] = useState(() => calendar.currentPage());

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <button className={styles.prev} onClick={() => setPage(calendar.prevPage())}></button>
        <h2 className={styles.month}>
          {page.date.toLocaleString('default', { month: 'long' })} {page.date.getFullYear()}
        </h2>
        <button className={styles.next} onClick={() => setPage(calendar.nextPage())}></button>
      </div>
      <div className={styles.calendar}>
        {firstLetters.map((letter, index) => (
          <span className={styles.letter} key={index}>
            {letter}
          </span>
        ))}
        {page.prevMonth.map((day) => (
          <span className={styles.shadow} key={day}>
            {day}
          </span>
        ))}
        {page.currentMonth.map((day) => {
          const date = new Date(page.date.getFullYear(), page.date.getMonth(), +day);

          return isToday(date) ? (
            <span className={`${styles.day} ${styles.today}`} key={day}>
              {day}
            </span>
          ) : (
            <span className={styles.day} key={day}>
              {day}
            </span>
          );
        })}
        {page.nextMonth.map((day) => (
          <span className={styles.shadow} key={day}>
            {day}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CalendarComponent;
