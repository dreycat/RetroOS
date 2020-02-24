import React, { FC } from 'react';

import styles from './Range.module.css';

const Range: FC<any> = props => <input className={styles.main} type="range" {...props} />;

export default Range;
