import { Author } from './Author';
import styles from './Notepad.module.css';

export const Notepad = () => {
  return (
    <div className={styles.main}>
      <Author />
    </div>
  );
};
