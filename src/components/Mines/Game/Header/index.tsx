import React, { FC } from 'react';

import Timer from '../../../Timer';
import styles from './Header.module.css';

import { ReactComponent as FlagIcon } from './images/flag.svg';
import { ReactComponent as Balloon } from './images/balloon.svg';
import { ReactComponent as BalloonTwo } from './images/balloon2.svg';
import { StatusGame } from '../enums';

interface IProps {
  flags: number;
  mines: number;
  statusGame: StatusGame;
}

const Header: FC<IProps> = ({ flags, mines, statusGame }) => (
  <div className={`${styles.main} boarder`}>
    <Timer isActive={statusGame === StatusGame.Start} />
    {statusGame === StatusGame.Fail && <span>Fail</span>}
    {statusGame === StatusGame.Win && (
      <div className={styles.wrapper}>
        <Balloon className={styles.balloon} width={20} height={20} />
        <span>Win</span>
        <BalloonTwo className={styles.balloonTwo} width={24} height={24} />
      </div>
    )}
    <div className={styles.flags}>
      <FlagIcon className={styles.flagIcon} width={14} height={14} /> {flags} / {mines}
    </div>
  </div>
);

export default Header;
