import { getCurrentTheme, setTheme, themes } from '../../../utils/themes';
import { capitalize } from '../../../utils/capitalize';
import { preloadImages } from '../../../utils/preloadImages';
import styles from './ThemesTab.module.css';

import wallpapers0 from '../../../assets/images/wallpapers/wp0.webp';
import wallpapers1 from '../../../assets/images/wallpapers/wp1.webp';
import wallpapers2 from '../../../assets/images/wallpapers/wp2.webp';
import wallpapers3 from '../../../assets/images/wallpapers/wp3.jpg';

const images = [wallpapers0, wallpapers1, wallpapers2, wallpapers3];

export const ThemesTab = () => {
  preloadImages(images);

  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.legend}>Themes:</legend>
      <select
        className={`${styles.select} border`}
        onChange={(e) => setTheme(e.target.value as Themes)}
        defaultValue={getCurrentTheme()}
      >
        {themes.map((theme) => (
          <option value={theme} key={theme}>
            {capitalize(theme)}
          </option>
        ))}
      </select>
    </fieldset>
  );
};
