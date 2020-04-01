import React, { FC, ChangeEvent } from 'react';

import Range from '../Range';

interface IProps {
  duration: number;
  isRadio: boolean;
  time: number;
  seek: (time: number) => void;
}

const Progress: FC<IProps> = ({ isRadio, duration, time, seek }) => (
  <Range
    type="range"
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

export default Progress;
