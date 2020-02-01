import React from 'react';

import Application from '../Application';
import Player from './Player';

import { ReactComponent as PlayerIcon } from './images/ipod.svg';

const AudioPlayer = () => (
  <Application
    name="AudioPlayer"
    icon={<PlayerIcon width={40} height={40} />}
    defaultIconPosition={{ top: 60, left: 60 }}
    defaultWindowPosition={{ top: 70, left: 1142 }}
  >
    <Player />
  </Application>
);

export default AudioPlayer;
