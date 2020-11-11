import React, { FC, useState, useCallback } from 'react';

import Board from './Board';
import Header from './Header';
import { getEmptyField, generateField } from './generateField';
import { hasUserWon } from './hasUserWon';
import { clicker } from './clicker';
import { deepClone } from '../../../utils/deepClone';
import { Field } from './types';
import { Cell, StatusGame } from './enums';
import styles from './Game.module.css';

interface IProps {
  fieldWidth: number;
  fieldHeight: number;
  mines: number;
  sellSize: number;
}

const Game: FC<IProps> = ({ fieldWidth, fieldHeight, mines, sellSize }) => {
  const [field, setField] = useState<Field>(generateField(fieldWidth, fieldHeight, mines));
  const [userField, setUserField] = useState<Field>(getEmptyField(fieldWidth, fieldHeight, Cell.Suspense));
  const [statusGame, setStatusGame] = useState<StatusGame>(StatusGame.Start);
  const [flags, setFlags] = useState(0);

  const handleLeftClick = useCallback(
    (x: number, y: number) => {
      if (userField[y][x] === Cell.Open || userField[y][x] === Cell.Flag) return;
      if (field[y][x] === Cell.Mine) {
        setStatusGame(StatusGame.Fail);
        return;
      }

      const newUserField = clicker(userField, field, x, y);

      if (hasUserWon(newUserField, mines)) {
        setStatusGame(StatusGame.Win);
        setUserField(newUserField);
        return;
      }

      setUserField(newUserField);
    },
    [userField, field, mines]
  );

  const handleRightClick = useCallback(
    (x: number, y: number) => {
      if (userField[y][x] === Cell.Open) return;

      const cloneUserField: Field = deepClone(userField);

      if (cloneUserField[y][x] === Cell.Flag) {
        cloneUserField[y][x] = Cell.Suspense;
        setFlags((flag) => flag - 1);
        setUserField(cloneUserField);
        return;
      }

      if (flags < mines) {
        cloneUserField[y][x] = Cell.Flag;
        setFlags((flag) => flag + 1);
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
    setStatusGame(StatusGame.Start);
  }, [fieldWidth, fieldHeight, mines]);

  return (
    <div>
      <Header flags={flags} mines={mines} statusGame={statusGame} />
      <div className={styles.wrapper} style={{ width: fieldWidth * sellSize, height: fieldHeight * sellSize }}>
        <Board field={field} fieldWidth={fieldWidth} fieldHeight={fieldHeight} sellSize={sellSize} zIndex={10} />
        {statusGame !== StatusGame.Fail && (
          <Board
            field={userField}
            fieldWidth={fieldWidth}
            fieldHeight={fieldHeight}
            sellSize={sellSize}
            handleLeftClick={handleLeftClick}
            handleRightClick={handleRightClick}
            zIndex={11}
          />
        )}
        {(statusGame === StatusGame.Fail || statusGame === StatusGame.Win) && (
          <div className={styles.background}>
            <button className={styles.resetButton} onClick={reset}>
              New
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Game;
