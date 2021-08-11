import { Clock } from '../Clock';
import { FullScreen } from '../FullScreen';
import styles from './Taskbar.module.css';

export const Taskbar = () => (
  <div className={styles.main} onContextMenu={(e) => e.preventDefault()}>
    <h1 className={styles.logo}>RetroOS</h1>
    <div className={styles.expander} />
    <Clock />
    <FullScreen />
  </div>
);
