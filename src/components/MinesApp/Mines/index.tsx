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

  const handleClick = useCallback(
    (y: number, x: number, ctx: boolean) => {
      const clone = deepClone(userField);
      // I apologize for the bad code
      if (clone[y][x] !== Cell.Open) {
        if (ctx && clone[y][x] === Cell.Flag) {
          clone[y][x] = Cell.Suspense;
          setFlags(flag => flag - 1);
        } else if (ctx && flags < MINES) {
          clone[y][x] = Cell.Flag;
          setFlags(flag => flag + 1);
        }
        if (!ctx && clone[y][x] === Cell.Flag) {
          setFlags(flag => flag - 1);
        }
        if (!ctx) {
          clone[y][x] = Cell.Open;
        }
        if (!ctx && field[y][x] === Cell.Mine) {
          setStatusGame(Game.Fail);
          return;
        }
      }

      setUserField(clone);
    },
    [userField, flags, field]
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
      {statusGame !== Game.Fail && <Board field={userField} handleClick={handleClick} />}
      {statusGame === Game.Fail && (
        <button className={styles.reset} onClick={reset}>
          New Game
        </button>
      )}
    </div>
  );
};

export default Mines;
