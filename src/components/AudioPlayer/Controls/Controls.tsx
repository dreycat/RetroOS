import type { FC } from 'react';

import { ReactComponent as PlayIcon } from './images/play.svg';
import { ReactComponent as PauseIcon } from './images/pause.svg';
import { ReactComponent as NextIcon } from './images/next.svg';
import styles from './Controls.module.css';

interface ControlsProps {
  isPlaying: boolean;
  play: () => void;
  pause: () => void;
  prevTrack: () => void;
  nextTrack: () => void;
}

const ICON_SIZE = 24;

export const Controls: FC<ControlsProps> = ({ play, pause, isPlaying, prevTrack, nextTrack }) => (
  <div>
    <button className={styles.control} onClick={prevTrack} aria-label="previous track">
      <NextIcon className={styles.mirror} width={ICON_SIZE} height={ICON_SIZE} />
    </button>
    {isPlaying ? (
      <button className={styles.control} onClick={pause} aria-label="pause">
        <PauseIcon width={ICON_SIZE} height={ICON_SIZE} />
      </button>
    ) : (
      <button className={styles.control} onClick={play} aria-label="play">
        <PlayIcon width={ICON_SIZE} height={ICON_SIZE} />
      </button>
    )}
    <button className={styles.control} onClick={nextTrack} aria-label="next track">
      <NextIcon width={ICON_SIZE} height={ICON_SIZE} />
    </button>
  </div>
);
