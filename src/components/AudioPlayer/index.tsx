import React from 'react';
import { CSSTransition } from 'react-transition-group';

import Icon from '../Icon';

import Window from '../Window';
import useWindow from '../../hooks/useWindow';
import useIcon from '../../hooks/useIcon';

import { ReactComponent as PlayerIcon } from './img/ipod.svg';

const AudioPlayer = () => {
  const { isOpen, handleOpen, onClose, storeWindowCoords, saveWindowPosition } = useWindow(
    { top: 200, left: 400 },
    'AudioPlayer'
  );
  const { storeIconCoords, saveIconPosition } = useIcon({ top: 60, left: 60 }, 'AudioPlayerIcon');

  return (
    <>
      <CSSTransition in={isOpen} timeout={300} classNames="window" unmountOnExit>
        <Window
          title="Music"
          top={storeWindowCoords.top}
          left={storeWindowCoords.left}
          onClose={onClose}
          onSave={saveWindowPosition}
        >
          AudioPlayer
        </Window>
      </CSSTransition>
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
