import { isMobile } from '../../utils/isMobile';

const desktopShortcutPositions = {
  audioplayer: { top: 170, left: 65 },
  console: { top: 287, left: 77 },
  dungeon: { top: 637, left: 76 },
  explorer: { top: 60, left: 59 },
  mines: { top: 522, left: 83 },
  todo: { top: 400, left: 80 },
};

const mobileShortcutPositions = {
  audioplayer: { top: 145, left: 141 },
  console: { top: 56, left: 150 },
  dungeon: { top: 150, left: 48 },
  explorer: { top: 53, left: 30 },
  mines: { top: 356, left: 57 },
  todo: { top: 249, left: 52 },
};

const desktopWindowPositions = {
  audioplayer: { top: 70, left: 692 },
  console: { top: 70, left: 175 },
  dungeon: { top: 70, left: 175 },
  explorer: { top: 103, left: 566 },
  mines: { top: 47, left: 54 },
  todo: { top: 167, left: 818 },
  imageviewer: { top: 160, left: 663 },
  notepad: { top: 150, left: 516 },
  settings: { top: 163, left: 716 },
  videoplayer: { top: 171, left: 763 },
};

const mobileWindowPositions = {
  audioplayer: { top: 24, left: window.innerWidth - 258 },
  console: { top: 24, left: window.innerWidth - 300 },
  dungeon: { top: 24, left: window.innerWidth - 514 },
  explorer: { top: 103, left: window.innerWidth - 480 },
  mines: { top: 47, left: window.innerWidth - 382 },
  todo: { top: 117, left: window.innerWidth - 300 },
  imageviewer: { top: 24, left: window.innerWidth - 322 },
  notepad: { top: 24, left: window.innerWidth - 392 },
  settings: { top: 163, left: 120 },
  videoplayer: { top: 100, left: window.innerWidth - 562 },
};

export const windowPositions = isMobile() ? mobileWindowPositions : desktopWindowPositions;
export const shortcutPositions = isMobile() ? mobileShortcutPositions : desktopShortcutPositions;
