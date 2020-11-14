import React from 'react';

import Screen from './Screen';
import Marquee from './Marquee';
import Playlist from './Playlist';
import Progress from './Progress';
import Controlls from './Controlls';
import VolumeControl from './VolumeControl';
import HeaderLayout from './Layouts/HeaderLayout';
import { useAudio } from '../../hooks/useAudio';
import playlist from './playlist';
import styles from './AudioPlayer.module.css';

const AudioPlayer = () => {
  const { audio, state, controlls } = useAudio(playlist);

  return (
    <div className={styles.main}>
      {audio}
      <HeaderLayout
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
        progress={
          <Progress duration={state.duration} time={state.time} isRadio={state.isRadio} seek={controlls.seek} />
        }
      />
      <Playlist list={playlist} setTrack={controlls.setTrack} currentTrack={state.trackId} />
    </div>
  );
};

export default AudioPlayer;
