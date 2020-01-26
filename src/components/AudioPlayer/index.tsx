import React from 'react';

import Icon from '../Icon';

import Window from '../Window';

const AudioPlayer = () => (
  <>
    <Window title="Music" top={200} left={400}>
      AudioPlayer
    </Window>
    <Icon title="AudioPlayer" left={20} top={40} />;
  </>
);

export default AudioPlayer;
