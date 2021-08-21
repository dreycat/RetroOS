export const themes: Themes[] = ['default', 'green', 'yellow', 'colorless'];

export const setTheme = (theme: Themes) => {
  const element = document.documentElement;
  themes.forEach((item) => element.classList.remove(item));
  localStorage.setItem('theme', theme);
  if (theme === 'default') return;
  element.classList.add(theme);
};

export const initTheme = () => {
  const theme = localStorage.getItem('theme') as Themes | null;
  if (theme === 'default' || !theme) return;
  document.documentElement.classList.add(theme);
};

export const getCurrentTheme = (): Themes => {
  return (localStorage.getItem('theme') as Themes) ?? 'default';
};
