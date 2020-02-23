import React from 'react';

import preloadImages from '../../utils/preloadImages';
import { Themes } from '../../types';

const themes: Themes[] = ['blue', 'green', 'yellow', 'colorless'];
const images = [
  '/images/wallpapers/wp0.jpg',
  '/images/wallpapers/wp1.jpg',
  '/images/wallpapers/wp2.jpg',
  '/images/wallpapers/wp3.jpg'
];

const Settings = () => {
  preloadImages(images);

  const setTheme = (theme: Themes) => {
    const element = document.documentElement;
    themes.forEach(item => element.classList.remove(item));
    localStorage.setItem('theme', theme);
    element.classList.add(theme);
  };

  return (
    <>
      <button onClick={() => setTheme('blue')}>blue</button>
      <button onClick={() => setTheme('green')}>green</button>
      <button onClick={() => setTheme('yellow')}>yellow</button>
      <button onClick={() => setTheme('colorless')}>colorless</button>
    </>
  );
};

export default Settings;
