import type { FC, Dispatch, SetStateAction } from 'react';

import styles from './Playlist.module.css';

interface PlaylistProps {
  list: Track[];
  currentTrack: number;
  setTrack: Dispatch<SetStateAction<number>>;
}

export const Playlist: FC<PlaylistProps> = ({ list, currentTrack, setTrack }) => (
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
