import type { FC } from 'react';

import { StatusGame } from '../enums';
import styles from './Menu.module.css';

interface IProps {
  statusGame: StatusGame;
  setStatusGame: (statusGame: StatusGame) => void;
  setLevel: (level: number) => void;
}

export const Menu: FC<IProps> = ({ statusGame, setStatusGame, setLevel }) => (
  <>
    <ul className={styles.menu}>
      {statusGame === StatusGame.Fail && (
        <li>
          <button className={styles.menuItem} onClick={() => setStatusGame(StatusGame.Start)}>
            Try again
          </button>
        </li>
      )}
      <li>
        <button
          className={styles.menuItem}
          onClick={() => {
            setLevel(0);
            setStatusGame(StatusGame.Start);
          }}
        >
          New Game
        </button>
      </li>
      <li>
        <button className={styles.menuItem} onClick={() => setStatusGame(StatusGame.Load)}>
          Load
        </button>
      </li>
    </ul>
  </>
);
