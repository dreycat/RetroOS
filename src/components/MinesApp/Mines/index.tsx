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
  fieldWidth: number;
  fieldHeight: number;
  mines: number;
  sellSize: number;
}

const Mines: FC<IProps> = ({ fieldWidth, fieldHeight, mines, sellSize }) => {
  const [field, setField] = useState<Field>(generateField(fieldWidth, fieldHeight, mines));
  const [userField, setUserField] = useState<Field>(getEmptyField(fieldWidth, fieldHeight, Cell.Suspense));
  const [flags, setFlags] = useState(0);
  const [statusGame, setStatusGame] = useState<Game>(Game.Process);

  const handleLeftClick = useCallback(
    (x: number, y: number) => {
      if (userField[y][x] === Cell.Open || userField[y][x] === Cell.Flag) return;
      if (field[y][x] === Cell.Mine) {
        setStatusGame(Game.Fail);
        return;
      }

      const cloneUserField = clicker(userField, field, x, y);

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
    (x: number, y: number) => {
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
    setField(generateField(fieldWidth, fieldHeight, mines));
    setUserField(getEmptyField(fieldWidth, fieldHeight, Cell.Suspense));
    setFlags(0);
    setStatusGame(Game.Process);
  }, [fieldWidth, fieldHeight, mines]);

  return (
    <div className={styles.wrapper} style={{ width: fieldWidth * sellSize, height: fieldHeight * sellSize }}>
      <Board field={field} fieldWidth={fieldWidth} fieldHeight={fieldHeight} sellSize={sellSize} />
      {statusGame !== Game.Fail && (
        <Board
          field={userField}
          fieldWidth={fieldWidth}
          fieldHeight={fieldHeight}
          sellSize={sellSize}
          handleLeftClick={handleLeftClick}
          handleRightClick={handleRightClick}
        />
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
