import React from 'react';

import Icon from '../Icon';

import Window from '../Window';
import useWindow from '../../hooks/useWindow';
import useIcon from '../../hooks/useIcon';

const AudioPlayer = () => {
  const { isOpen, handleOpen, onClose, storeWindowCoords, saveWindowPosition } = useWindow(
    { top: 200, left: 400 },
    'AudioPlayer'
  );
  const { storeIconCoords, saveIconPosition } = useIcon({ top: 60, left: 60 }, 'AudioPlayerIcon');

  return (
    <>
      {isOpen && (
        <Window
          title="Music"
          top={storeWindowCoords.top}
          left={storeWindowCoords.left}
          onClose={onClose}
          onSave={saveWindowPosition}
        >
          AudioPlayer
        </Window>
      )}
      <Icon
        title="AudioPlayer"
        top={storeIconCoords.top}
        left={storeIconCoords.left}
        onClick={handleOpen}
        onSave={saveIconPosition}
      />
    </>
  );
};

export default AudioPlayer;
