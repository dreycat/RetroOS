import React from 'react';

import styles from './Playlist.module.css';

const Playlist = () => (
  <ul className="playlist border">
    <li className={styles.track}>"track.name"</li>
  </ul>
);

export default Playlist;
