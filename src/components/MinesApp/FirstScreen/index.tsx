import React, { useState, useCallback } from 'react';

import Mines from '../Mines';

const CELL_SIZE = 32;

const FirstScreen = () => {
  const [fieldWidth, setFieldWidth] = useState(8);
  const [fieldHeight, setFieldHeight] = useState(8);
  const [mines, setMines] = useState(10);
  const [isOpen, setOpen] = useState(false);

  const handleClick = useCallback((width: number, height: number, mines: number) => {
    setFieldWidth(width);
    setFieldHeight(height);
    setMines(mines);
    setOpen(true);
  }, []);

  return isOpen ? (
    <Mines fieldWidth={fieldWidth} fieldHeight={fieldHeight} mines={mines} sellSize={CELL_SIZE} />
  ) : (
    <div>
      <button onClick={() => handleClick(8, 8, 10)}>8:8 10 mines</button>
      <button onClick={() => handleClick(16, 16, 40)}>16:16 40 mines</button>
      <button onClick={() => handleClick(30, 16, 99)}>30:16 99 mines</button>
      <button
        onClick={() => {
          const fieldWidth = Math.floor(window.innerWidth / CELL_SIZE) - 3;
          const fieldHeight = Math.floor(window.innerHeight / CELL_SIZE) - 3;
          const mines = Math.floor((fieldHeight * fieldWidth) / 5);
          handleClick(fieldWidth, fieldHeight, mines);
        }}
      >
        Ultimate
      </button>
    </div>
  );
};

export default FirstScreen;
