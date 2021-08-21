import type { FC } from 'react';

import { StatusGame } from '../enums';
import { levels } from '../Game/levels';
import { getStorageData } from '../../../utils/getStorageData';
import styles from './LoadMenu.module.css';

interface LoadMenuProps {
  setStatusGame: (statusGame: StatusGame) => void;
  setLevel: (level: number) => void;
}

export const LoadMenu: FC<LoadMenuProps> = ({ setStatusGame, setLevel }) => {
  const savedLevel = getStorageData('dungeon_level', 0);

  return (
    <ul className={styles.loadMenu}>
      {Array.from({ length: levels.length }, (_, i) => i).map((level) => {
        return savedLevel >= level ? (
          <li key={level}>
            <button
              className={styles.savedLevel}
              onClick={() => {
                setLevel(level);
                setStatusGame(StatusGame.Start);
              }}
            >{`Level: ${level + 1}`}</button>
          </li>
        ) : (
          <li className={styles.level} key={level}>{`Level: ${level + 1}`}</li>
        );
      })}
    </ul>
  );
};
