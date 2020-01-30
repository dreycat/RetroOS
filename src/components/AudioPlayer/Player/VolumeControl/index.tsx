import React, { FC } from 'react';

import styles from './VolumeControl.module.css';

interface IProps {
  setVolume: React.Dispatch<React.SetStateAction<number>>;
  volume: number;
}

const VolumeControl: FC<IProps> = ({ setVolume, volume }) => (
  <input
    className={styles.main}
    type="range"
    name="track"
    min="0"
    max="1"
    step="0.01"
    aria-label="volume control"
    value={volume}
    onChange={e => setVolume(parseFloat(e.target.value))}
  />
);

export default VolumeControl;
