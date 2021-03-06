import React, { FC } from 'react';

import { StatusGame } from '../enums';

import styles from './Menu.module.css';

interface IProps {
  statusGame: StatusGame;
  setStatusGame: (statusGame: StatusGame) => void;
  setLevel: (level: number) => void;
}

const Menu: FC<IProps> = ({ statusGame, setStatusGame, setLevel }) => (
  <>
    <ul className={styles.menu}>
      {statusGame === StatusGame.Fail && (
        <li
          className={styles.menuItem}
          onClick={() => {
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
  </>
);

export default Menu;
