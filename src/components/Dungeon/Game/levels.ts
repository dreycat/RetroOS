import { Map, Level } from '../types';

const map1: Map = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 'K', 0],
  [0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 1, 1, 1, 1, 1, 'D', 1, 0, 1, 1, 1, 0],
  [0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0],
  [0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 'K', 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
  [0, 1, 0, 1, 1, 1, 1, 'K', 0, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
  [0, 'K', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const map2: Map = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 'K', 0],
  [0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 1, 1, 1, 1, 1, 'D', 1, 0, 1, 1, 1, 0],
  [0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0],
  [0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 'K', 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
  [0, 1, 0, 1, 1, 1, 1, 'K', 0, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
  [0, 'K', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const map3: Map = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 'K', 0],
  [0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
  [0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 1, 1, 1, 1, 1, 'B', 1, 0, 1, 1, 1, 0],
  [0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0],
  [0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 'K', 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0],
  [0, 1, 0, 1, 1, 1, 1, 'K', 0, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
  [0, 'K', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const level1: Level = {
  map: map1,
  player: { x: 1, y: 1 },
  enemies: [
    { coords: { x: 10, y: 1 }, speed: 200, direction: 'left' },
    { coords: { x: 10, y: 14 }, speed: 300, direction: 'left' },
  ],
};

const level2: Level = {
  map: map2,
  player: { x: 1, y: 1 },
  enemies: [
    { coords: { x: 10, y: 1 }, speed: 200, direction: 'left' },
    { coords: { x: 10, y: 14 }, speed: 300, direction: 'left' },
  ],
};

const level3: Level = {
  map: map3,
  player: { x: 1, y: 1 },
  enemies: [
    { coords: { x: 10, y: 1 }, speed: 200, direction: 'left' },
    { coords: { x: 10, y: 14 }, speed: 300, direction: 'left' },
  ],
};

export const levels = [level1, level2, level3];
