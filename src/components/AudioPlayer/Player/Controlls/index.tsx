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

const ICON_SIZE = 24;

const Controlls: FC<IProps> = ({ setPlaying, isPlaing, prevTrack, nextTrack }) => (
  <div className={styles.controls}>
    <button className={styles.control}>
      <NextIcon className={styles.mirror} width={ICON_SIZE} height={ICON_SIZE} onClick={() => prevTrack()} />
    </button>
    {isPlaing ? (
      <button className={styles.control} onClick={() => setPlaying(false)}>
        <PauseIcon width={ICON_SIZE} height={ICON_SIZE} />
      </button>
    ) : (
      <button className={styles.control} onClick={() => setPlaying(true)}>
        <PlayIcon width={ICON_SIZE} height={ICON_SIZE} />
      </button>
    )}
    <button className={styles.control}>
      <NextIcon width={ICON_SIZE} height={ICON_SIZE} onClick={() => nextTrack()} />
    </button>
  </div>
);

export default Controlls;
