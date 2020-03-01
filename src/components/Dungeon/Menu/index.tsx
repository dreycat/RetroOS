import React, { FC } from 'react';

import levels from '../Game/levels';
import { StatusGame } from '../enums';
import getStarogeData from '../../../utils/getStarogeData';
import styles from './Menu.module.css';

interface IProps {
  statusGame: StatusGame;
  setStatusGame: (statusGame: StatusGame) => void;
  setLevel: (level: number) => void;
}

const Menu: FC<IProps> = ({ statusGame, setStatusGame, setLevel }) => {
  const savedLevel = getStarogeData('dungeon_level', 0)();

  return (
    <>
      <div className={styles.background} />
      <ul className={styles.menu}>
        {statusGame === StatusGame.Fail && (
          <li
            className={styles.menuItem}
            onClick={() => {
              console.log('Try again');
              setStatusGame(StatusGame.Start);
            }}
          >
            Try again
          </li>
        )}
        <li
          className={styles.menuItem}
          onClick={() => {
            setLevel(0);
            setStatusGame(StatusGame.Start);
          }}
        >
          New Game
        </li>
        <li
          className={styles.menuItem}
          onClick={() => {
            setStatusGame(StatusGame.Load);
          }}
        >
          Load
        </li>
      </ul>

      {statusGame === StatusGame.Load && (
        <ul className={styles.loadMenu}>
          {Array.from({ length: levels.length }, (_, i) => i).map(level => {
            return savedLevel >= level ? (
              <li
                className={styles.savedLevel}
                key={level}
                onClick={() => {
                  setLevel(level);
                  setStatusGame(StatusGame.Start);
                }}
              >{`Level: ${level + 1}`}</li>
            ) : (
              <li className={styles.level} key={level}>{`Level: ${level + 1}`}</li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Menu;
