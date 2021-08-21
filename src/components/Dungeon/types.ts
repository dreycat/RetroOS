export type Square = 0 | 1 | 'K' | 'D' | 'P' | 'B' | 'G';
export type Map = Square[][];
export type Direction = 'up' | 'down' | 'left' | 'right';

export type Enemy = {
  coords: Point2D;
  speed: number;
  direction: Direction;
};

export type Level = {
  map: Map;
  player: Point2D;
  enemies: Enemy[];
};
