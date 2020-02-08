import React, { FC, useState, useCallback } from 'react';

import Board from './Board';
import styles from './Mines.module.css';
import generateField, { getEmptyField } from './generateField';
import deepClone from '../../../utils/deepClone';
import hasUserWon from './hasUserWon';
import clicker from './clicker';

import { Field } from './types';
import { Cell, Game } from './enums';

interface IProps {
  size: number;
  mines: number;
}

const Mines: FC<IProps> = ({ size, mines }) => {
  const [field, setField] = useState<Field>(generateField(size, mines));
  const [userField, setUserField] = useState<Field>(getEmptyField(size, Cell.Suspense));
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

      if (hasUserWon(cloneUserField, mines)) {
        setStatusGame(Game.Win);
        setUserField(cloneUserField);
        return;
      }

      setUserField(cloneUserField);
    },
    [userField, field, mines]
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

      if (flags < mines) {
        cloneUserField[y][x] = Cell.Flag;
        setFlags(flag => flag + 1);
        setUserField(cloneUserField);
        return;
      }
    },
    [userField, flags, mines]
  );

  const reset = useCallback(() => {
    setField(generateField(size, mines));
    setUserField(getEmptyField(size, Cell.Suspense));
    setFlags(0);
    setStatusGame(Game.Process);
  }, [mines, size]);

  return (
    <div className={styles.wrapper} style={{ width: size * 32, height: size * 32 }}>
      <Board field={field} size={size} />
      {statusGame !== Game.Fail && (
        <Board field={userField} size={size} handleLeftClick={handleLeftClick} handleRightClick={handleRightClick} />
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
