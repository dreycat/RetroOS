import React, { FC } from 'react';

import styles from './Controlls.module.css';

import { ReactComponent as PlayIcon } from './images/play.svg';
import { ReactComponent as PauseIcon } from './images/pause.svg';
import { ReactComponent as NextIcon } from './images/next.svg';

interface IProps {
  setPlaying: React.Dispatch<any>;
  isPlaing: boolean;
}

const Controlls: FC<IProps> = ({ setPlaying, isPlaing }) => (
  <div className={styles.controls}>
    <button className={styles.control}>
      <NextIcon width={24} height={24} className={styles.mirror} />
    </button>
    {isPlaing ? (
      <button className={styles.control} onClick={() => setPlaying(false)}>
        <PauseIcon width={24} height={24} />
      </button>
    ) : (
      <button className={styles.control} onClick={() => setPlaying(true)}>
        <PlayIcon width={24} height={24} />
      </button>
    )}
    <button className={styles.control}>
      <NextIcon width={24} height={24} />
    </button>
  </div>
);

export default Controlls;
