import React from 'react';

import ImageViewer from '../ImageViewer';
import ContextApplication from '../ContextApplication';

const defaultWindowPosition = { top: 160, left: 663 };

const ImageViewerApp = () => (
  <ContextApplication name="imageviewer" label="ImageViewer" defaultWindowPosition={defaultWindowPosition}>
    <ImageViewer />
  </ContextApplication>
);
export default ImageViewerApp;
