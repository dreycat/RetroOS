import React, { FC, useState, useEffect } from 'react';

import transformTime from '../../utils/transformTime';

interface IProps {
  isActive: boolean;
}

const Timer: FC<IProps> = ({ isActive }) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (!isActive) return;
    setSeconds(0);
    const id = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    return () => clearInterval(id);
  }, [isActive]);

  return <span>{transformTime(seconds)}</span>;
};

export default Timer;
