import type { FC, ChangeEvent } from 'react';

import { Range } from '../Range';

interface ProgressProps {
  duration: number;
  isRadio: boolean;
  time: number;
  seek: (time: number) => void;
}

export const Progress: FC<ProgressProps> = ({ isRadio, duration, time, seek }) => (
  <Range
    name="track"
    aria-label="progress"
    min="0"
    step="1"
    onChange={(e: ChangeEvent<HTMLInputElement>) => seek(parseInt(e.target.value))}
    value={isRadio ? 0 : time}
    max={isRadio ? 0 : duration}
    disabled={isRadio}
  />
);
