import type { FC } from 'react';

import styles from './Range.module.css';

export const Range: FC<any> = (props) => <input className={styles.main} type="range" {...props} />;
