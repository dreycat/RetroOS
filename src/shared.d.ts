interface Point2D {
  x: number;
  y: number;
}

interface Track {
  id: number;
  name: string;
  url: string;
  title: string;
  isRadio: boolean;
}

interface Position {
  top: number;
  left: number;
}

type Apps =
  | 'audioplayer'
  | 'console'
  | 'mines'
  | 'settings'
  | 'todo'
  | 'dungeon'
  | 'screensaver'
  | 'explorer'
  | 'notepad'
  | 'videoplayer'
  | 'imageviewer';

type Themes = 'default' | 'green' | 'yellow' | 'colorless';
