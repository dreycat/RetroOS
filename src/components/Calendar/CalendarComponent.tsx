import React, { useState } from 'react';

import Calendar from './Calendar';
import presenter from './presenter';
import styles from './Calendar.module.css';

const calendar = new Calendar(presenter);

const firstLetters = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

const CalendarComponent = () => {
  const [months, setMonths] = useState(() => calendar.currentPage());

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <button className={styles.prev} onClick={() => setMonths(calendar.prevPage())}></button>
        <h2 className={styles.month}>
          {months.date.toLocaleString('default', { month: 'long' })} {months.date.getFullYear()}
        </h2>
        <button className={styles.next} onClick={() => setMonths(calendar.nextPage())}></button>
      </div>
      <div className={styles.calendar}>
        {firstLetters.map((letter) => (
          <span className={styles.letter}>{letter}</span>
        ))}
        {months.prevMonth.map((day) => (
          <span className={styles.shadow} key={day}>
            {day}
          </span>
        ))}
        {months.currentMonth.map((day) => (
          <span className={styles.day} key={day}>
            {day}
          </span>
        ))}
        {months.nextMonth.map((day) => (
          <span className={styles.shadow} key={day}>
            {day}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CalendarComponent;
