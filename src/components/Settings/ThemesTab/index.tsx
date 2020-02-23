import React from 'react';

import { getCurrentTheme, setTheme, themes } from '../../../utils/themes';
import capitalize from '../../../utils/capitalize';
import { Themes } from '../../../types';
import styles from './ThemesTab.module.css';

const ThemesTab = () => {
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
