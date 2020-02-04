import React, { FC } from 'react';

import { ReactComponent as PlayIcon } from './images/play.svg';
import { ReactComponent as PauseIcon } from './images/pause.svg';
import { ReactComponent as NextIcon } from './images/next.svg';
import styles from './Controlls.module.css';

interface IProps {
  isPlaing: boolean;
  play: () => void;
  pause: () => void;
  prevTrack: () => void;
  nextTrack: () => void;
}

const ICON_SIZE = 24;

const Controlls: FC<IProps> = ({ play, pause, isPlaing, prevTrack, nextTrack }) => (
  <div>
    <button className={styles.control}>
      <NextIcon className={styles.mirror} width={ICON_SIZE} height={ICON_SIZE} onClick={() => prevTrack()} />
    </button>
    {isPlaing ? (
      <button className={styles.control} onClick={pause}>
        <PauseIcon width={ICON_SIZE} height={ICON_SIZE} />
      </button>
    ) : (
      <button className={styles.control} onClick={play}>
        <PlayIcon width={ICON_SIZE} height={ICON_SIZE} />
      </button>
    )}
    <button className={styles.control}>
      <NextIcon width={ICON_SIZE} height={ICON_SIZE} onClick={() => nextTrack()} />
    </button>
  </div>
);

export default Controlls;
