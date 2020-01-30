import React, { FC } from 'react';

import styles from './Playlist.module.css';

type Track = {
  id: number;
  name: string;
  url: string;
  title: string;
};

interface IProps {
  list: Track[];
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
