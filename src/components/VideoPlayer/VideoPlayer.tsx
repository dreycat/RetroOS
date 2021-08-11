import { useContext } from 'react';
import { FileLinksContext } from '../../contexts/FileLinksProvider';

import styles from './VideoPlayer.module.css';

const defaultSrc = 'https://www.youtube.com/embed/BfCgF10C58Q';
const flags = 'controls=0&autoplay=1&disablekb=1&modestbranding=1&loop=1&start=0';

export const VideoPlayer = () => {
  const { state } = useContext(FileLinksContext);
  const src = state.videoplayer ?? defaultSrc;

  return (
    <div className={styles.main}>
      <div className={styles.wrapper} />
      <iframe
        title="videoplayer"
        width={560}
        height={315}
        src={`${src}?${flags}`}
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};
