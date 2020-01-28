import React from 'react';

import useAudio from '../../../hooks/useAudio';

import styles from './Player.module.css';

const Player = () => {
  const { audio, state, controlls } = useAudio('http://ice2.somafm.com/thetrip-128-mp3');

  return (
    <div className={styles.main}>
      {audio}
      <button onClick={() => controlls.setPlaying(true)}>play</button>
      <button onClick={() => controlls.setPlaying(false)}>pause</button>
      <button onClick={() => controlls.setMuted(true)}>mute</button>
      <button onClick={() => controlls.setMuted(false)}>unmute</button>
      <button onClick={() => controlls.setVolume(0.1)}>0.1</button>
      <button onClick={() => controlls.setVolume(0.5)}>0.5</button>
      <button onClick={() => controlls.setVolume(0.7)}>0.7</button>
      <button onClick={() => controlls.setVolume(1)}>1</button>
      <button onClick={() => controlls.setSrc('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3')}>
        change track
      </button>
      <pre>{JSON.stringify(state)}</pre>
    </div>
  );
};

export default Player;
