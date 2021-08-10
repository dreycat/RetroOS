import AudioPlayer from '../AudioPlayer';
import { Application } from '../Application';
import { shortcutPositions, windowPositions } from './positions';
import { ReactComponent as Icon } from './icons/AudioPlayerIcon.svg';

export const AudioPlayerApp = () => (
  <Application
    name="audioplayer"
    label="Audio Player"
    icon={<Icon width={40} height={40} />}
    defaultShortcutPosition={shortcutPositions.audioplayer}
    defaultWindowPosition={windowPositions.audioplayer}
  >
    <AudioPlayer />
  </Application>
);
