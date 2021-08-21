import type { FC, ChangeEvent, Dispatch, SetStateAction } from 'react';

import { Range } from '../Range';

interface VolumeControlProps {
  setVolume: Dispatch<SetStateAction<number>>;
  volume: number;
}

export const VolumeControl: FC<VolumeControlProps> = ({ setVolume, volume }) => (
  <Range
    name="track"
    min="0"
    max="1"
    step="0.01"
    aria-label="volume control"
    value={volume}
    onChange={(e: ChangeEvent<HTMLInputElement>) => setVolume(parseFloat(e.target.value))}
  />
);
