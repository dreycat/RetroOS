import React, { FC } from 'react';

import Calendar from '../../Calendar';
import { withTransition } from '../../../hocs/withTransition';
import styles from './Popup.module.css';

interface IProps {
  popupEl: React.RefObject<HTMLDivElement>;
}

const Popup: FC<IProps> = ({ popupEl }) => (
  <div className={styles.popup} ref={popupEl}>
    <Calendar />
  </div>
);

export default withTransition(300, 'fade')(Popup);
