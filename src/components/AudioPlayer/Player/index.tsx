import React from 'react';

import useAudio from '../../../hooks/useAudio';

import list from '../trackList';

import Screen from './Screen';
import Marquee from './Marquee';
import Controlls from './Controlls';
import VolumeControl from './VolumeControl';
import Playlist from './Playlist';
import PlayerLayout from '../../Layouts/PlayerLayout';
import styles from './Player.module.css';

const Player = () => {
  const { audio, state, controlls } = useAudio(list);

  return (
    <>
      <div className={styles.main}>
        {audio}
        <PlayerLayout
          screen={<Screen {...state} />}
          marquee={<Marquee>{state.curentTrack.title}</Marquee>}
          controlls={
            <Controlls
              setPlaying={controlls.setPlaying}
              prevTrack={controlls.prevTrack}
              nextTrack={controlls.nextTrack}
              isPlaing={state.isPlaying}
            />
          }
          volumeControl={<VolumeControl volume={state.volume} setVolume={controlls.setVolume} />}
        />
        <Playlist list={list} setTrack={controlls.setTrack} currentTrack={state.trackId} />
      </div>
      <pre className={styles.pre}>{JSON.stringify(state, null, 2)}</pre>
    </>
  );
};

export default Player;
