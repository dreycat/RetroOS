import React, { useState, useCallback } from 'react';

import Board from './Board';
import styles from './Mines.module.css';
import generateField, { getEmptyField } from './generateField';
import deepClone from '../../../utils/deepClone';
import hasUserWon from './hasUserWon';
import clicker from './clicker';

import { Field } from './types';
import { Cell, Game } from './enums';

const MINES = 10;
const FIELD_SIZE = 8;

const Mines = () => {
  const [field, setField] = useState<Field>(generateField(FIELD_SIZE, MINES));
  const [userField, setUserField] = useState<Field>(getEmptyField(FIELD_SIZE, Cell.Suspense));
  const [flags, setFlags] = useState(0);
  const [statusGame, setStatusGame] = useState<Game>(Game.Process);

  const handleLeftClick = useCallback(
    (y: number, x: number) => {
      if (userField[y][x] === Cell.Open || userField[y][x] === Cell.Flag) return;
      if (field[y][x] === Cell.Mine) {
        setStatusGame(Game.Fail);
        return;
      }

      const cloneUserField = clicker(userField, field, y, x);

      if (hasUserWon(cloneUserField, MINES)) {
        setStatusGame(Game.Win);
        setUserField(cloneUserField);
        return;
      }

      setUserField(cloneUserField);
    },
    [userField, field]
  );

  const handleRightClick = useCallback(
    (y: number, x: number) => {
      if (userField[y][x] === Cell.Open) return;

      const cloneUserField: Field = deepClone(userField);

      if (cloneUserField[y][x] === Cell.Flag) {
        cloneUserField[y][x] = Cell.Suspense;
        setFlags(flag => flag - 1);
        setUserField(cloneUserField);
        return;
      }

      if (flags < MINES) {
        cloneUserField[y][x] = Cell.Flag;
        setFlags(flag => flag + 1);
        setUserField(cloneUserField);
        return;
      }
    },
    [userField, flags]
  );

  const reset = useCallback(() => {
    setField(generateField(FIELD_SIZE, MINES));
    setUserField(getEmptyField(FIELD_SIZE, Cell.Suspense));
    setFlags(0);
    setStatusGame(Game.Process);
  }, []);

  return (
    <div className={styles.wrapper}>
      <Board field={field} />
      {statusGame !== Game.Fail && (
        <Board field={userField} handleLeftClick={handleLeftClick} handleRightClick={handleRightClick} />
      )}
      {statusGame === Game.Fail && (
        <button className={styles.reset} onClick={reset}>
          New Game
        </button>
      )}
      {statusGame === Game.Win && (
        <button className={styles.reset} onClick={reset}>
          Win!
        </button>
      )}
    </div>
  );
};

export default Mines;
