import React, { useContext } from 'react';

import { FileLinksContext } from '../../contexts/FileLinksProvider';
import styles from './ImageViewer.module.css';

const defaultSrc = '/images/cat.webp';

const ImageViewer = () => {
  const { state } = useContext(FileLinksContext);
  const src = state.imageviewer ?? defaultSrc;

  return (
    <div className={styles.main}>
      <img className={styles.image} src={src} alt="something cool" />
    </div>
  );
};

export default ImageViewer;
