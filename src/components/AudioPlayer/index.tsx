import React from 'react';

import Application from '../Application';
import Player from './Player';
import isMobile from '../../utils/isMobile';

import { ReactComponent as PlayerIcon } from './images/ipod.svg';

const AudioPlayer = () => {
  const defaultIconPosition = isMobile() ? { top: 44, left: 10 } : { top: 60, left: 60 };
  const defaultWindowPosition = isMobile() ? { top: 24, left: window.innerWidth - 258 } : { top: 70, left: 742 };

  return (
    <Application
      name="AudioPlayer"
      icon={<PlayerIcon width={40} height={40} />}
      defaultIconPosition={defaultIconPosition}
      defaultWindowPosition={defaultWindowPosition}
    >
      <Player />
    </Application>
  );
};

export default AudioPlayer;
