import React from 'react';

import AudioPlayer from '../AudioPlayer';
import Application from '../Application';
import { isMobile } from '../../utils/isMobile';
import { ReactComponent as Icon } from './icons/AudioPlayerIcon.svg';

const defaultIconPosition = isMobile() ? { top: 145, left: 141 } : { top: 170, left: 65 };
const defaultWindowPosition = isMobile() ? { top: 24, left: window.innerWidth - 258 } : { top: 70, left: 692 };

const AudioPlayerApp = () => (
  <Application
    name="audioplayer"
    label="Audio Player"
    icon={<Icon width={40} height={40} />}
    defaultIconPosition={defaultIconPosition}
    defaultWindowPosition={defaultWindowPosition}
  >
    <AudioPlayer />
  </Application>
);

export default AudioPlayerApp;
