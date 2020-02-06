import React, { useState, useCallback } from 'react';

import Board from './Board';
import styles from './Mines.module.css';
import generateField, { getEmptyField } from './generateField';
import deepClone from '../../../utils/deepClone';

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
      if (userField[y][x] === Cell.Open) return;
      if (field[y][x] === Cell.Mine) {
        setStatusGame(Game.Fail);
        return;
      }

      const clone = deepClone(userField);

      if (clone[y][x] === Cell.Flag) {
        setFlags(flag => flag - 1);
      }

      clone[y][x] = Cell.Open;
      setUserField(clone);
    },
    [userField, field]
  );

  const handleRightClick = useCallback(
    (y: number, x: number) => {
      if (userField[y][x] === Cell.Open) return;

      const clone = deepClone(userField);

      if (clone[y][x] === Cell.Flag) {
        clone[y][x] = Cell.Suspense;
        setFlags(flag => flag - 1);
        setUserField(clone);
        return;
      }

      if (flags < MINES) {
        clone[y][x] = Cell.Flag;
        setFlags(flag => flag + 1);
        setUserField(clone);
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
    </div>
  );
};

export default Mines;
