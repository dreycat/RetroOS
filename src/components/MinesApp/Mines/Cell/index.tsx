import React, { FC, ReactNode } from 'react';

import styles from './Cell.module.css';

import { ReactComponent as FlagIcon } from '../../images/flag.svg';
import { ReactComponent as MineIcon } from '../../images/mine2.svg';

import { Cell as ECell } from '../enums';

const colors = ['empty', 'green', 'yellow', 'lightOrange', 'orange', 'darkOrange', 'lightRed', 'red', 'darkRed'];
const styleMapper = {
  [ECell.Flag]: 'flag',
  [ECell.Mine]: 'mine',
  [ECell.Open]: 'open',
  [ECell.Suspense]: 'suspense'
};

type Body = string | number | ReactNode;

interface IProps {
  value: string | number;
  y: number;
  x: number;
  handleLeftClick?: (x: number, y: number) => void;
  handleRightClick?: (x: number, y: number) => void;
  sellSize: number;
}

const Cell: FC<IProps> = ({ value, y, x, sellSize, handleLeftClick = () => {}, handleRightClick = () => {} }) => {
  let body: Body = null;
  let color = styles.empty;

  if (value === ECell.Mine) {
    body = <MineIcon width={20} height={20} />;
  } else if (value === ECell.Flag) {
    body = <FlagIcon width={20} height={20} />;
  } else if (typeof value === 'number' && value !== 0) {
    body = value;
  }

  if (typeof value === 'string') {
    color = styles[styleMapper[value as ECell]] || styles.empty;
  } else if (typeof value === 'number') {
    color = styles[colors[value]] || styles.empty;
  }

  return (
    <li
      style={{ width: sellSize, height: sellSize }}
      className={`${styles.main} ${color}`}
      onClick={() => handleLeftClick(y, x)}
      onContextMenu={() => handleRightClick(y, x)}
    >
      {body}
    </li>
  );
};

export default Cell;
