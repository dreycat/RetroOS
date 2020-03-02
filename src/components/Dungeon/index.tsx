import React, { useState, useCallback } from 'react';

import Game from './Game';
import Menu from './Menu';
import LoadMenu from './LoadMenu';
import { StatusGame } from './enums';
import styles from './Dungeon.module.css';
import getStarogeData from '../../utils/getStarogeData';
import levels from './Game/levels';

const Dungeon = () => {
  const [level, setLevel] = useState(0);
  const [statusGame, setStatusGame] = useState(StatusGame.Init);

  const teleport = useCallback(() => {
    if (levels.length - 1 > level) {
      const nextLevel = level + 1;
      setLevel(nextLevel);
      setStatusGame(StatusGame.Start);
      const savedLevel = getStarogeData('dungeon_level', 0)();
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

  return (
    <div className={styles.main}>
      {statusGame !== StatusGame.Start && (
        <Menu setLevel={setLevel} setStatusGame={setStatusGame} statusGame={statusGame} />
      )}
      {statusGame === StatusGame.Load && <LoadMenu setLevel={setLevel} setStatusGame={setStatusGame} />}
      {statusGame === StatusGame.Start && <Game level={level} finishGame={finishGame} teleport={teleport} win={win} />}
      {statusGame === StatusGame.Init && <div className={styles.init} />}
      {statusGame === StatusGame.Win && <div className={styles.win} />}
      {statusGame === StatusGame.Fail && <div className={styles.fail} />}
    </div>
  );
};

export default Dungeon;
