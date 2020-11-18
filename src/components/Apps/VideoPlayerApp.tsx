import React from 'react';

import VideoPlayer from '../VideoPlayer';
import ContextApplication from '../ContextApplication';

const defaultWindowPosition = { top: 171, left: 763 };

const VideoPlayerApp = () => (
  <ContextApplication name="videoplayer" label="VideoPlayer" defaultWindowPosition={defaultWindowPosition}>
    <VideoPlayer />
  </ContextApplication>
);
export default VideoPlayerApp;
