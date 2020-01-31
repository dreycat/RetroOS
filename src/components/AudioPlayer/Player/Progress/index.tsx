import React, { FC } from 'react';

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
    value={duration && duration !== Infinity ? time : 0}
    step="1"
    onChange={e => seek(parseInt(e.target.value))}
    max={duration && duration !== Infinity ? duration : 0}
  />
);

export default Progress;
