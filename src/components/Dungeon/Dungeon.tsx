import { useState, useCallback } from 'react';

import { Game } from './Game';
import { Menu } from './Menu';
import { LoadMenu } from './LoadMenu';
import { StatusGame } from './enums';
import { getStorageData } from '../../utils/getStorageData';
import { levels } from './Game/levels';
import styles from './Dungeon.module.css';

export const Dungeon = () => {
  const [level, setLevel] = useState(0);
  const [statusGame, setStatusGame] = useState(StatusGame.Init);

  const teleport = useCallback(() => {
    if (levels.length - 1 > level) {
      const nextLevel = level + 1;
      setLevel(nextLevel);
      setStatusGame(StatusGame.Start);
      const savedLevel = getStorageData('dungeon_level', 0);
      if (nextLevel > savedLevel) {
        localStorage.setItem('dungeon_level', nextLevel.toString());
      }
    }
  }, [level]);

  const finishGame = useCallback(() => {
    setStatusGame(StatusGame.Fail);
  }, []);

  const win = useCallback(() => {
    setStatusGame(StatusGame.Win);
  }, []);

  const showMenu = statusGame !== StatusGame.Start && statusGame !== StatusGame.Load;

  return (
    <div className={styles.main}>
      {showMenu && <Menu setLevel={setLevel} setStatusGame={setStatusGame} statusGame={statusGame} />}
      {statusGame === StatusGame.Load && <LoadMenu setLevel={setLevel} setStatusGame={setStatusGame} />}
      {statusGame === StatusGame.Start && <Game level={level} finishGame={finishGame} teleport={teleport} win={win} />}
      {statusGame === StatusGame.Init && <div className={styles.init} />}
      {statusGame === StatusGame.Win && <div className={styles.win} />}
      {statusGame === StatusGame.Fail && <div className={styles.fail} />}
    </div>
  );
};
