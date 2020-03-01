export type Square = 0 | 1 | 'K' | 'D' | 'P' | 'B' | 'G';
export type Map = Square[][];
export type Direction = 'up' | 'down' | 'left' | 'right';
export type Coords = { x: number; y: number };

export type Enemy = {
  coords: Coords;
  speed: number;
  direction: Direction;
};

export type Level = {
  map: Map;
  player: Coords;
  enemies: Enemy[];
};
