import { VideoPlayer } from '../VideoPlayer';
import { ContextApplication } from '../ContextApplication';
import { windowPositions } from './positions';

export const VideoPlayerApp = () => (
  <ContextApplication name="videoplayer" label="VideoPlayer" defaultWindowPosition={windowPositions.videoplayer}>
    <VideoPlayer />
  </ContextApplication>
);
