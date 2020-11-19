import React from 'react';

import styles from './ImageViewer.module.css';

const src = '/images/cat.webp';

const ImageViewer = () => (
  <div className={styles.main}>
    <img className={styles.image} src={src} alt="something cool" />
  </div>
);

export default ImageViewer;
