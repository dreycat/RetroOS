import React from 'react';

import Screen from './Screen';
import Marquee from './Marquee';
import Controlls from './Controlls';
import VolumeControl from './VolumeControl';
import Playlist from './Playlist';
import PlayerLayout from '../../Layouts/PlayerLayout';
import Progress from './Progress';
import styles from './Player.module.css';
import playlist from './playlist';
import useAudio from '../../../hooks/useAudio';

const Player = () => {
  const { audio, state, controlls } = useAudio(playlist);

  return (
    <div className={styles.main}>
      {audio}
      <PlayerLayout
        screen={<Screen {...state} />}
        marquee={<Marquee error={state.error}>{state.curentTrack.title}</Marquee>}
        controlls={
          <Controlls
            play={controlls.play}
            pause={controlls.pause}
            prevTrack={controlls.prevTrack}
            nextTrack={controlls.nextTrack}
            isPlaing={state.isPlaying}
          />
        }
        volumeControl={<VolumeControl volume={state.volume} setVolume={controlls.setVolume} />}
        progress={<Progress duration={state.duration} time={state.time} seek={controlls.seek} />}
      />
      <Playlist list={playlist} setTrack={controlls.setTrack} currentTrack={state.trackId} />
    </div>
  );
};

export default Player;
