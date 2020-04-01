import React, { FC } from 'react';

import styles from './Playlist.module.css';
import { ITrack } from '../../../interfaces';

interface IProps {
  list: ITrack[];
  currentTrack: number;
  setTrack: React.Dispatch<React.SetStateAction<number>>;
}

const Playlist: FC<IProps> = ({ list, currentTrack, setTrack }) => (
  <div className={styles.main}>
    <ul className={`${styles.playlist} border`}>
      {list.map(({ name, title, id }) => (
        <li
          className={id === currentTrack ? `${styles.track} ${styles.current}` : styles.track}
          title={title}
          key={id}
          onClick={() => setTrack(id)}
        >
          {name}
        </li>
      ))}
    </ul>
  </div>
);

export default Playlist;
