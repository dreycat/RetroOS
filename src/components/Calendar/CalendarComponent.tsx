import { useEffect, useState } from 'react';

import { Calendar } from './Calendar';
import { presenter } from './presenter';
import { isToday } from '../../utils/date';
import styles from './Calendar.module.css';

const firstLetters = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const calendar = new Calendar(presenter);

export const CalendarComponent = () => {
  const [page, setPage] = useState(() => calendar.currentPage());

  const showPreviousMonth = () => setPage(calendar.prevPage());
  const showNextMonth = () => setPage(calendar.nextPage());

  useEffect(() => {
    const keydownHandler = ({ code }: KeyboardEvent) => {
      if (code === 'ArrowLeft') {
        showPreviousMonth();
      }
      if (code === 'ArrowRight') {
        showNextMonth();
      }
    };
    document.addEventListener('keydown', keydownHandler);
    return () => {
      document.removeEventListener('keydown', keydownHandler);
    };
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <button className={styles.prev} onClick={showPreviousMonth} aria-label="show previous month" />
        <h2 className={styles.month}>
          {page.date.toLocaleString('default', { month: 'long' })} {page.date.getFullYear()}
        </h2>
        <button className={styles.next} onClick={showNextMonth} aria-label="show next month" />
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
