import React, { useState, useCallback } from 'react';

import Mines from '../Mines';

const FirstScreen = () => {
  const [size, setSize] = useState(8);
  const [mines, setMines] = useState(10);
  const [isOpen, setOpen] = useState(false);

  const handleClick = useCallback((size: number, mines: number) => {
    setSize(size);
    setMines(mines);
    setOpen(true);
  }, []);

  return isOpen ? (
    <Mines size={size} mines={mines} />
  ) : (
    <div>
      <button onClick={() => handleClick(8, 10)}>8:8 10 mines</button>
      <button onClick={() => handleClick(16, 40)}>16:16 40 mines</button>
      <button onClick={() => handleClick(20, 99)}>20:20 99 mines</button>
      <button
        onClick={() => {
          const size = Math.floor(window.innerHeight / 32) - 3;
          const mines = Math.floor((size * size) / 8);
          handleClick(size, mines);
        }}
      >
        ultimate
      </button>
    </div>
  );
};

export default FirstScreen;
