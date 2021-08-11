import type { FC, RefObject } from 'react';

import { CalendarComponent } from '../../Calendar';
import { withTransition } from '../../../hocs/withTransition';
import styles from './Popup.module.css';

interface IProps {
  popupEl: RefObject<HTMLDivElement>;
}

const Popup: FC<IProps> = ({ popupEl }) => (
  <div className={styles.popup} ref={popupEl}>
    <CalendarComponent />
  </div>
);

export default withTransition(300, 'fade')(Popup);
