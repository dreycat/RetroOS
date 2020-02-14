import React, { useState, useCallback } from 'react';

import Game from './Game';
import FirstScreen from './FirstScreen';

const CELL_SIZE = 32;

const Mines = () => {
  const [fieldWidth, setFieldWidth] = useState(8);
  const [fieldHeight, setFieldHeight] = useState(8);
  const [mines, setMines] = useState(10);
  const [isStart, setStart] = useState(false);

  const handleClick = useCallback((width: number, height: number, mines: number) => {
    setFieldWidth(width);
    setFieldHeight(height);
    setMines(mines);
    setStart(true);
  }, []);

  return isStart ? (
    <Game fieldWidth={fieldWidth} fieldHeight={fieldHeight} mines={mines} sellSize={CELL_SIZE} />
  ) : (
    <FirstScreen handleClick={handleClick} sellSize={CELL_SIZE} />
  );
};

export default Mines;
