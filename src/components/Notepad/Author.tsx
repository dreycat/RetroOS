import styles from './Author.module.css';

export const Author = () => (
  <div className={styles.main}>
    <h2 className={styles.title}>Contacts:</h2>
    <ul className={styles.list}>
      <li className={styles.listItem}>
        Github:
        <a className={styles.url} href="https://github.com/dreycat" target="_blank" rel="noreferrer">
          https://github.com/dreycat
        </a>
      </li>
      <li className={styles.listItem}>
        Email:
        <a className={styles.url} href="mailto:dreycat@yandex.ru">
          dreycat@yandex.ru
        </a>
      </li>
    </ul>
  </div>
);
