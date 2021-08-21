import type { FC, InputHTMLAttributes } from 'react';

import styles from './Range.module.css';

interface RangeProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Range: FC<RangeProps> = (props) => <input className={styles.main} type="range" {...props} />;
