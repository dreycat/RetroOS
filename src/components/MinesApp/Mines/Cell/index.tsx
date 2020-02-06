import React, { FC, ReactNode } from 'react';

import styles from './Cell.module.css';

import { ReactComponent as FlagIcon } from '../../images/flag.svg';
import { ReactComponent as MineIcon } from '../../images/mine2.svg';

import { Cell as ECell } from '../enums';

type Body = string | number | ReactNode;

interface IProps {
  value: string | number;
  y: number;
  x: number;
  handleClick?: (y: number, x: number, ctx: boolean) => void;
}
const colors = ['empty', 'green', 'yellow', 'lightOrange', 'orange', 'darkOrange', 'lightRed', 'red', 'darkRed'];

const Cell: FC<IProps> = ({ value, y, x, handleClick = () => {} }) => {
  let body: Body = '';
  let color = styles.empty;

  if (value === ECell.Mine) {
    body = <MineIcon width={20} height={20} />;
  } else if (value === ECell.Flag) {
    body = <FlagIcon width={20} height={20} />;
  } else if (typeof value === 'number' && value !== 0) {
    body = value;
  }

  if (typeof value === 'string') {
    color = styles[value] || styles.empty;
  } else if (typeof value === 'number') {
    color = styles[colors[value]] || styles.empty;
  }

  return (
    <li
      className={`${styles.main} ${color}`}
      onClick={() => handleClick(y, x, false)}
      onContextMenu={() => handleClick(y, x, true)}
    >
      {body}
    </li>
  );
};

export default Cell;
