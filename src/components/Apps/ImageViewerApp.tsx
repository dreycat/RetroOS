import { ImageViewer } from '../ImageViewer';
import { ContextApplication } from '../ContextApplication';
import { windowPositions } from './positions';

export const ImageViewerApp = () => (
  <ContextApplication name="imageviewer" label="ImageViewer" defaultWindowPosition={windowPositions.imageviewer}>
    <ImageViewer />
  </ContextApplication>
);
