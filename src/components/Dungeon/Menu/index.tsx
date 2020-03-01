import React, { FC } from 'react';

import { StatusGame } from '../enums';
import styles from './Menu.module.css';

interface IProps {
  statusGame: StatusGame;
  setStatusGame: (statusGame: StatusGame) => void;
  setLevel: (level: number) => void;
}

const Menu: FC<IProps> = ({ statusGame, setStatusGame, setLevel }) => {
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
            console.log('New Game');
            setStatusGame(StatusGame.Start);
          }}
        >
          New Game
        </li>
        <li className={styles.menuItem}>Load</li>
      </ul>
    </>
  );
};

export default Menu;
