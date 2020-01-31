import React, { FC } from 'react';

import transformTime from '../../../../utils/transformTime';
import checkRadio from '../../../../utils/checkRadio';
import styles from './Screen.module.css';

interface IProps {
  time: number;
  duration: number;
  volume: number;
  isPlaying: boolean;
  isMuted: boolean;
}

const Screen: FC<IProps> = ({ time, isPlaying, duration }) => (
  <div className={`${styles.main} border`}>
    {checkRadio(duration) && <span className={styles.radio}>radio</span>}
    {isPlaying ? <span className={styles.play} /> : <span className={styles.pause} />}
    <span className={styles.prettyTime}>{transformTime(time)}</span>
  </div>
);

export default Screen;
