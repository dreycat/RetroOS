import React, { FC, ChangeEvent } from 'react';

import isRadio from '../../../utils/isRadio';
import Range from '../Range';

interface IProps {
  duration: number;
  time: number;
  seek: (time: number) => void;
}

const Progress: FC<IProps> = ({ duration, time, seek }) => (
  <Range
    type="range"
    name="track"
    aria-label="progress"
    min="0"
    step="1"
    onChange={(e: ChangeEvent<HTMLInputElement>) => seek(parseInt(e.target.value))}
    value={isRadio(duration) ? 0 : time}
    max={isRadio(duration) ? 0 : duration}
    disabled={isRadio(duration)}
  />
);

export default Progress;
