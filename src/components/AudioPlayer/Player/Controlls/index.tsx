import React, { FC } from 'react';

import styles from './Controlls.module.css';

import { ReactComponent as PlayIcon } from './images/play.svg';
import { ReactComponent as PauseIcon } from './images/pause.svg';
import { ReactComponent as NextIcon } from './images/next.svg';

interface IProps {
  isPlaing: boolean;
  setPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  prevTrack: () => void;
  nextTrack: () => void;
}

const Controlls: FC<IProps> = ({ setPlaying, isPlaing, prevTrack, nextTrack }) => (
  <div className={styles.controls}>
    <button className={styles.control}>
      <NextIcon width={24} height={24} className={styles.mirror} onClick={() => prevTrack()} />
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
      <NextIcon width={24} height={24} onClick={() => nextTrack()} />
    </button>
  </div>
);

export default Controlls;
