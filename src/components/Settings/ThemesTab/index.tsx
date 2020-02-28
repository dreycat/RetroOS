import React from 'react';

import { getCurrentTheme, setTheme, themes } from '../../../utils/themes';
import capitalize from '../../../utils/capitalize';
import { Themes } from '../../../types';
import preloadImages from '../../../utils/preloadImages';
import styles from './ThemesTab.module.css';

const images = [
  '/images/wallpapers/wp0.jpg',
  '/images/wallpapers/wp1.jpg',
  '/images/wallpapers/wp2.jpg',
  '/images/wallpapers/wp3.jpg'
];

const ThemesTab = () => {
  preloadImages(images);

  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.legend}>Themes:</legend>
      <select
        className={`${styles.select} border`}
        onChange={e => setTheme(e.target.value as Themes)}
        defaultValue={getCurrentTheme()}
      >
        {themes.map(theme => (
          <option value={theme} key={theme}>
            {capitalize(theme)}
          </option>
        ))}
      </select>
    </fieldset>
  );
};

export default ThemesTab;
