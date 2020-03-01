import React, { useState, useCallback } from 'react';

import Game from './Game';
import Menu from './Menu';
import { StatusGame } from './enums';
import styles from './Dungeon.module.css';
import levels from './Game/levels';

const Dungeon = () => {
  const [level, setLevel] = useState(0);
  const [statusGame, setStatusGame] = useState(StatusGame.Init);

  const teleport = useCallback(() => {
    if (levels.length - 1 > level) {
      setLevel(level + 1);
      setStatusGame(StatusGame.Start);
    }
  }, [level]);

  const finishGame = useCallback(() => {
    setStatusGame(StatusGame.Fail);
  }, []);

  return (
    <div className={styles.main}>
      {statusGame !== StatusGame.Start && (
        <Menu setLevel={setLevel} setStatusGame={setStatusGame} statusGame={statusGame} />
      )}
      {statusGame === StatusGame.Start && <Game level={level} finishGame={finishGame} teleport={teleport} />}
    </div>
  );
};

export default Dungeon;
