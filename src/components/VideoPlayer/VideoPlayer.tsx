import React from 'react';

import styles from './VideoPlayer.module.css';

const src = 'https://www.youtube.com/embed/BfCgF10C58Q';
const flags = 'controls=0&autoplay=1&disablekb=1&modestbranding=1&loop=1&start=0';

const VideoPlayer = () => {
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

export default VideoPlayer;
