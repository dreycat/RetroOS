import { FC } from 'react';

import { transformTime } from '../../../utils/transformTime';
import styles from './Screen.module.css';

interface ScreenProps {
  time: number;
  isPlaying: boolean;
  isRadio: boolean;
}

export const Screen: FC<ScreenProps> = ({ time, isPlaying, isRadio }) => (
  <div className={`${styles.main} border`}>
    {isRadio && <span className={styles.radio}>radio</span>}
    {isPlaying ? <span className={styles.play} /> : <span className={styles.pause} />}
    <span className={styles.prettyTime}>{transformTime(time)}</span>
  </div>
);
