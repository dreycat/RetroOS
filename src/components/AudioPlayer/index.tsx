import React from 'react';

import Icon from '../Icon';

import Window from '../Window';
import useWindow from '../../hooks/useWindow';
import useIcon from '../../hooks/useIcon';

import Player from './Player';

import { ReactComponent as PlayerIcon } from './images/ipod.svg';

const AudioPlayer = () => {
  const { isOpen, handleOpen, onClose, storeWindowCoords, saveWindowPosition } = useWindow(
    { top: 200, left: 400 },
    'audio_player'
  );
  const { storeIconCoords, saveIconPosition } = useIcon({ top: 60, left: 60 }, 'audio_player_icon');

  return (
    <>
      <Window
        isOpen={isOpen}
        title="Music"
        top={storeWindowCoords.top}
        left={storeWindowCoords.left}
        onClose={onClose}
        onSave={saveWindowPosition}
      >
        <Player />
      </Window>
      <Icon
        title="AudioPlayer"
        top={storeIconCoords.top}
        left={storeIconCoords.left}
        onClick={handleOpen}
        onSave={saveIconPosition}
      >
        <PlayerIcon width={40} height={40} />
      </Icon>
    </>
  );
};

export default AudioPlayer;
