import { Themes } from '../types';

export default () => {
  const storageTheme = localStorage.getItem('theme') as Themes | null;
  const theme: Themes = storageTheme ?? 'blue';
  document.documentElement.classList.add(theme);
};
