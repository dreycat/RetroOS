import React from 'react';

import ThemesTab from './ThemesTab';
import preloadImages from '../../utils/preloadImages';

const images = [
  '/images/wallpapers/wp0.jpg',
  '/images/wallpapers/wp1.jpg',
  '/images/wallpapers/wp2.jpg',
  '/images/wallpapers/wp3.jpg'
];

const Settings = () => {
  preloadImages(images);

  return <ThemesTab />;
};

export default Settings;
