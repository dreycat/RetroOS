import { Themes } from '../types';

export default () => {
  const theme = localStorage.getItem('theme') as Themes | null;
  if (theme === 'default' || !theme) return;
  document.documentElement.classList.add(theme);
};
