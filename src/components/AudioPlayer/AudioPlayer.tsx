import { Screen } from './Screen';
import { Marquee } from './Marquee';
import { Playlist } from './Playlist';
import { Progress } from './Progress';
import { Controls } from './Controls';
import { VolumeControl } from './VolumeControl';
import { HeaderLayout } from './Layouts/HeaderLayout';
import { useAudio } from '../../hooks/useAudio';
import { stationList } from './stationList';
import styles from './AudioPlayer.module.css';

export const AudioPlayer = () => {
  const { audio, state, controls } = useAudio(stationList);

  return (
    <div className={styles.main}>
      {audio}
      <HeaderLayout
        screen={<Screen {...state} />}
        marquee={<Marquee error={state.error}>{state.currentTrack.title}</Marquee>}
        controls={
          <Controls
            play={controls.play}
            pause={controls.pause}
            prevTrack={controls.prevTrack}
            nextTrack={controls.nextTrack}
            isPlaying={state.isPlaying}
          />
        }
        volumeControl={<VolumeControl volume={state.volume} setVolume={controls.setVolume} />}
        progress={<Progress duration={state.duration} time={state.time} isRadio={state.isRadio} seek={controls.seek} />}
      />
      <Playlist list={stationList} setTrack={controls.setTrack} currentTrack={state.trackId} />
    </div>
  );
};
