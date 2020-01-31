import React, { FC } from 'react';

import checkRadio from '../../../../utils/checkRadio';
import styles from './Progress.module.css';

interface IProps {
  duration: number;
  time: number;
  seek: (time: number) => void;
}

const Progress: FC<IProps> = ({ duration, time, seek }) => (
  <input
    className={styles.main}
    type="range"
    name="track"
    aria-label="progress"
    min="0"
    value={checkRadio(duration) ? 0 : time}
    step="1"
    onChange={e => seek(parseInt(e.target.value))}
    max={checkRadio(duration) ? 0 : duration}
  />
);

export default Progress;
